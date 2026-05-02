/* global Image, requestAnimationFrame */

const BLOCK_SELECTOR = '.wp-block-create-block-liquid-hero-block';
const MOBILE_SCROLL_LOCK_QUERY = '(max-width: 782px)';

const CONFIG = {
	simulationResolution: 128,
	textureResolution: 1024,
	densityFade: 1,
	velocityFade: 0.92,
	pressureIterations: 7,
	revealThreshold: 0.82,
	revealProbeColumns: 12,
	revealProbeRows: 8,
	finishBurstMs: 520,
	finishFadeMs: 980,
};

const SHADERS = {
	vertex: `#version 300 es
		precision highp float;
		in vec2 aPosition;
		out vec2 vUv;
		out vec2 vL;
		out vec2 vR;
		out vec2 vT;
		out vec2 vB;
		uniform vec2 uTexel;

		void main() {
			vUv = aPosition * 0.5 + 0.5;
			vL = vUv - vec2(uTexel.x, 0.0);
			vR = vUv + vec2(uTexel.x, 0.0);
			vT = vUv + vec2(0.0, uTexel.y);
			vB = vUv - vec2(0.0, uTexel.y);
			gl_Position = vec4(aPosition, 0.0, 1.0);
		}
	`,
	splat: `#version 300 es
		precision highp float;
		precision highp sampler2D;
		in vec2 vUv;
		uniform sampler2D uInput;
		uniform float uRatio;
		uniform vec3 uPointValue;
		uniform vec2 uPoint;
		uniform float uPointSize;
		out vec4 outColor;

		void main() {
			vec2 p = vUv - uPoint;
			p.x *= uRatio;
			vec3 splat = pow(2.0, -dot(p, p) / uPointSize) * uPointValue;
			vec3 base = texture(uInput, vUv).xyz;
			outColor = vec4(base + splat, 1.0);
		}
	`,
	advection: `#version 300 es
		precision highp float;
		precision highp sampler2D;
		in vec2 vUv;
		uniform sampler2D uVelocity;
		uniform sampler2D uInput;
		uniform vec2 uVelocityTexel;
		uniform vec2 uInputTexel;
		uniform float uDt;
		uniform float uDissipation;
		out vec4 outColor;

		vec4 bilerp(sampler2D sam, vec2 uv, vec2 texel) {
			vec2 st = uv / texel - 0.5;
			vec2 iuv = floor(st);
			vec2 fuv = fract(st);
			vec4 a = texture(sam, (iuv + vec2(0.5, 0.5)) * texel);
			vec4 b = texture(sam, (iuv + vec2(1.5, 0.5)) * texel);
			vec4 c = texture(sam, (iuv + vec2(0.5, 1.5)) * texel);
			vec4 d = texture(sam, (iuv + vec2(1.5, 1.5)) * texel);
			return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
		}

		void main() {
			vec2 coord = vUv - uDt * bilerp(uVelocity, vUv, uVelocityTexel).xy * uVelocityTexel;
			outColor = uDissipation * bilerp(uInput, coord, uInputTexel);
			outColor.a = 1.0;
		}
	`,
	divergence: `#version 300 es
		precision highp float;
		precision highp sampler2D;
		in vec2 vL;
		in vec2 vR;
		in vec2 vT;
		in vec2 vB;
		uniform sampler2D uVelocity;
		out vec4 outColor;

		void main() {
			float L = texture(uVelocity, vL).x;
			float R = texture(uVelocity, vR).x;
			float T = texture(uVelocity, vT).y;
			float B = texture(uVelocity, vB).y;
			float div = 0.5 * (R - L + T - B);
			outColor = vec4(div, 0.0, 0.0, 1.0);
		}
	`,
	pressure: `#version 300 es
		precision highp float;
		precision highp sampler2D;
		in vec2 vUv;
		in vec2 vL;
		in vec2 vR;
		in vec2 vT;
		in vec2 vB;
		uniform sampler2D uPressure;
		uniform sampler2D uDivergence;
		out vec4 outColor;

		void main() {
			float L = texture(uPressure, vL).x;
			float R = texture(uPressure, vR).x;
			float T = texture(uPressure, vT).x;
			float B = texture(uPressure, vB).x;
			float divergence = texture(uDivergence, vUv).x;
			float pressure = (L + R + B + T - divergence) * 0.25;
			outColor = vec4(pressure, 0.0, 0.0, 1.0);
		}
	`,
	gradientSubtract: `#version 300 es
		precision highp float;
		precision highp sampler2D;
		in vec2 vUv;
		in vec2 vL;
		in vec2 vR;
		in vec2 vT;
		in vec2 vB;
		uniform sampler2D uPressure;
		uniform sampler2D uVelocity;
		out vec4 outColor;

		void main() {
			float L = texture(uPressure, vL).x;
			float R = texture(uPressure, vR).x;
			float T = texture(uPressure, vT).x;
			float B = texture(uPressure, vB).x;
			vec2 velocity = texture(uVelocity, vUv).xy;
			velocity.xy -= vec2(R - L, T - B);
			outColor = vec4(velocity, 0.0, 1.0);
		}
	`,
	display: `#version 300 es
		precision highp float;
		precision highp sampler2D;
		in vec2 vUv;
		uniform sampler2D uFluid;
		uniform sampler2D uImageA;
		uniform sampler2D uImageB;
		uniform vec2 uCanvasSize;
		uniform vec2 uImageASize;
		uniform vec2 uImageBSize;
		uniform float uFinishBlend;
		out vec4 outColor;

		vec2 coverUv(vec2 uv, vec2 canvasSize, vec2 imageSize) {
			float canvasRatio = canvasSize.x / canvasSize.y;
			float imageRatio = imageSize.x / imageSize.y;
			vec2 scale = vec2(1.0);

			if (imageRatio > canvasRatio) {
				scale.x = canvasRatio / imageRatio;
			} else {
				scale.y = imageRatio / canvasRatio;
			}

			return (uv - 0.5) * scale + 0.5;
		}

		void main() {
			vec3 fluid = texture(uFluid, vUv).rgb;
			float flow = clamp(length(fluid.rg), 0.0, 1.0);
			float displacement = 0.018 + flow * 0.06;
			vec2 push = fluid.rg * displacement;
			float liquidMask = pow(clamp(max(max(fluid.r, fluid.g), fluid.b), 0.0, 1.0), 0.55);
			float maskBlend = smoothstep(0.34, 0.96, liquidMask);
			float blend = max(maskBlend, uFinishBlend);

			vec4 imageA = texture(uImageA, coverUv(vUv + push, uCanvasSize, uImageASize));
			vec4 imageB = texture(uImageB, coverUv(vUv, uCanvasSize, uImageBSize));
			vec4 color = mix(imageA, imageB, blend);
			color.rgb += fluid.rgb * 0.08 * (1.0 - blend);
			color.rgb = mix(color.rgb, color.rgb * vec3(0.86, 0.92, 1.08), 0.18);
			outColor = vec4(color.rgb, 1.0);
		}
	`,
};

const scrollLockState = {
	isLocked: false,
	scrollY: 0,
	previousHtmlOverflow: '',
	previousHtmlOverscrollBehavior: '',
	previousBodyOverflow: '',
	previousBodyPosition: '',
	previousBodyTop: '',
	previousBodyWidth: '',
	previousBodyOverscrollBehavior: '',
};

function lockMobileScroll() {
	if ( scrollLockState.isLocked ) {
		return;
	}

	scrollLockState.isLocked = true;
	scrollLockState.scrollY = window.scrollY || window.pageYOffset || 0;
	scrollLockState.previousHtmlOverflow =
		document.documentElement.style.overflow;
	scrollLockState.previousHtmlOverscrollBehavior =
		document.documentElement.style.overscrollBehavior;
	scrollLockState.previousBodyOverflow = document.body.style.overflow;
	scrollLockState.previousBodyPosition = document.body.style.position;
	scrollLockState.previousBodyTop = document.body.style.top;
	scrollLockState.previousBodyWidth = document.body.style.width;
	scrollLockState.previousBodyOverscrollBehavior =
		document.body.style.overscrollBehavior;

	document.documentElement.style.overflow = 'hidden';
	document.documentElement.style.overscrollBehavior = 'none';
	document.body.style.overflow = 'hidden';
	document.body.style.position = 'fixed';
	document.body.style.top = `-${ scrollLockState.scrollY }px`;
	document.body.style.width = '100%';
	document.body.style.overscrollBehavior = 'none';
}

function unlockMobileScroll() {
	if ( ! scrollLockState.isLocked ) {
		return;
	}

	document.documentElement.style.overflow =
		scrollLockState.previousHtmlOverflow;
	document.documentElement.style.overscrollBehavior =
		scrollLockState.previousHtmlOverscrollBehavior;
	document.body.style.overflow = scrollLockState.previousBodyOverflow;
	document.body.style.position = scrollLockState.previousBodyPosition;
	document.body.style.top = scrollLockState.previousBodyTop;
	document.body.style.width = scrollLockState.previousBodyWidth;
	document.body.style.overscrollBehavior =
		scrollLockState.previousBodyOverscrollBehavior;
	window.scrollTo( 0, scrollLockState.scrollY );

	scrollLockState.isLocked = false;
}

function setupMobileScrollLock( roots ) {
	const hasScrollLockBlock = roots.some(
		( root ) => root.dataset.liquidLockMobileScroll === 'true'
	);

	if ( ! hasScrollLockBlock ) {
		return;
	}

	const media = window.matchMedia( MOBILE_SCROLL_LOCK_QUERY );
	const updateScrollLock = () => {
		if ( media.matches ) {
			lockMobileScroll();
		} else {
			unlockMobileScroll();
		}
	};

	updateScrollLock();
	media.addEventListener( 'change', updateScrollLock );
	window.addEventListener( 'pagehide', unlockMobileScroll );
}

class LiquidHero {
	constructor( root ) {
		this.root = root;
		this.canvas = root.querySelector( '.liquid-hero-block__canvas' );
		this.fallback = root.querySelector(
			'.liquid-hero-block__fallback-image'
		);
		this.images = this.readImages();
		this.pointer = {
			x: 0,
			y: 0,
			dx: 0,
			dy: 0,
			splats: [],
		};
		this.textures = [];
		this.texturePromises = [];
		this.imageIndex = 0;
		this.nextIndex = 1;
		this.lastFrame = performance.now();
		this.frameCount = 0;
		this.isFinishing = false;
		this.finishStart = 0;
		this.finishBlend = 0;
	}

	async start() {
		if ( ! this.canvas || this.images.length < 2 ) {
			return;
		}

		this.resize();
		this.initGl();
		this.createRenderTargets();

		await Promise.all(
			[ this.imageIndex, this.nextIndex ].map( ( index ) =>
				this.ensureTexture( index )
			)
		);
		this.preloadUpcoming();

		if ( this.fallback ) {
			this.fallback.hidden = true;
		}

		this.root.addEventListener( 'pointermove', ( event ) =>
			this.onPointerMove( event )
		);
		this.root.addEventListener( 'pointerdown', ( event ) =>
			this.onPointerDown( event )
		);
		window.addEventListener( 'resize', () => this.resize() );
		this.raf = requestAnimationFrame( ( now ) => this.draw( now ) );
	}

	readImages() {
		try {
			const images = JSON.parse( this.root.dataset.liquidImages || '[]' );
			return images.filter( ( image ) => image && image.url );
		} catch {
			return [];
		}
	}

	initGl() {
		this.gl = this.canvas.getContext( 'webgl2', {
			alpha: false,
			antialias: false,
			depth: false,
			stencil: false,
			preserveDrawingBuffer: true,
		} );

		if ( ! this.gl || ! this.gl.getExtension( 'EXT_color_buffer_float' ) ) {
			throw new Error(
				'Liquid Hero requires WebGL2 float render targets.'
			);
		}

		this.vao = this.gl.createVertexArray();
		this.gl.bindVertexArray( this.vao );
		this.gl.bindBuffer( this.gl.ARRAY_BUFFER, this.gl.createBuffer() );
		this.gl.bufferData(
			this.gl.ARRAY_BUFFER,
			new Float32Array( [ -1, -1, -1, 1, 1, 1, 1, -1 ] ),
			this.gl.STATIC_DRAW
		);
		this.gl.bindBuffer(
			this.gl.ELEMENT_ARRAY_BUFFER,
			this.gl.createBuffer()
		);
		this.gl.bufferData(
			this.gl.ELEMENT_ARRAY_BUFFER,
			new Uint16Array( [ 0, 1, 2, 0, 2, 3 ] ),
			this.gl.STATIC_DRAW
		);
		this.gl.vertexAttribPointer( 0, 2, this.gl.FLOAT, false, 0, 0 );
		this.gl.enableVertexAttribArray( 0 );
		this.programs = {
			splat: this.createProgram( SHADERS.splat ),
			advection: this.createProgram( SHADERS.advection ),
			divergence: this.createProgram( SHADERS.divergence ),
			pressure: this.createProgram( SHADERS.pressure ),
			gradientSubtract: this.createProgram( SHADERS.gradientSubtract ),
			display: this.createProgram( SHADERS.display ),
		};
	}

	compileShader( type, source ) {
		const shader = this.gl.createShader( type );
		this.gl.shaderSource( shader, source );
		this.gl.compileShader( shader );

		if ( ! this.gl.getShaderParameter( shader, this.gl.COMPILE_STATUS ) ) {
			throw new Error( this.gl.getShaderInfoLog( shader ) );
		}

		return shader;
	}

	createProgram( fragmentSource ) {
		const program = this.gl.createProgram();
		this.gl.attachShader(
			program,
			this.compileShader( this.gl.VERTEX_SHADER, SHADERS.vertex )
		);
		this.gl.attachShader(
			program,
			this.compileShader( this.gl.FRAGMENT_SHADER, fragmentSource )
		);
		this.gl.bindAttribLocation( program, 0, 'aPosition' );
		this.gl.linkProgram( program );

		if ( ! this.gl.getProgramParameter( program, this.gl.LINK_STATUS ) ) {
			throw new Error( this.gl.getProgramInfoLog( program ) );
		}

		const uniforms = {};
		const total = this.gl.getProgramParameter(
			program,
			this.gl.ACTIVE_UNIFORMS
		);

		for ( let i = 0; i < total; i += 1 ) {
			const name = this.gl.getActiveUniform( program, i ).name;
			uniforms[ name ] = this.gl.getUniformLocation( program, name );
		}

		return { program, uniforms };
	}

	use( programInfo ) {
		this.gl.useProgram( programInfo.program );
		return programInfo.uniforms;
	}

	createFbo( width, height ) {
		const texture = this.gl.createTexture();
		this.gl.bindTexture( this.gl.TEXTURE_2D, texture );
		this.gl.texParameteri(
			this.gl.TEXTURE_2D,
			this.gl.TEXTURE_MIN_FILTER,
			this.gl.NEAREST
		);
		this.gl.texParameteri(
			this.gl.TEXTURE_2D,
			this.gl.TEXTURE_MAG_FILTER,
			this.gl.NEAREST
		);
		this.gl.texParameteri(
			this.gl.TEXTURE_2D,
			this.gl.TEXTURE_WRAP_S,
			this.gl.CLAMP_TO_EDGE
		);
		this.gl.texParameteri(
			this.gl.TEXTURE_2D,
			this.gl.TEXTURE_WRAP_T,
			this.gl.CLAMP_TO_EDGE
		);
		this.gl.texImage2D(
			this.gl.TEXTURE_2D,
			0,
			this.gl.RGBA16F,
			width,
			height,
			0,
			this.gl.RGBA,
			this.gl.HALF_FLOAT,
			null
		);

		const fbo = this.gl.createFramebuffer();
		this.gl.bindFramebuffer( this.gl.FRAMEBUFFER, fbo );
		this.gl.framebufferTexture2D(
			this.gl.FRAMEBUFFER,
			this.gl.COLOR_ATTACHMENT0,
			this.gl.TEXTURE_2D,
			texture,
			0
		);

		return {
			fbo,
			texture,
			width,
			height,
			texelX: 1 / width,
			texelY: 1 / height,
		};
	}

	createDoubleFbo( width, height ) {
		let read = this.createFbo( width, height );
		let write = this.createFbo( width, height );

		return {
			width,
			height,
			texelX: 1 / width,
			texelY: 1 / height,
			get read() {
				return read;
			},
			get write() {
				return write;
			},
			swap() {
				const tmp = read;
				read = write;
				write = tmp;
			},
		};
	}

	targetSize( base ) {
		const ratio = Math.max(
			this.canvas.width / this.canvas.height,
			this.canvas.height / this.canvas.width
		);
		const shortSide = Math.round( base );
		const longSide = Math.round( base * ratio );

		return this.canvas.width > this.canvas.height
			? { width: longSide, height: shortSide }
			: { width: shortSide, height: longSide };
	}

	createRenderTargets() {
		const simulation = this.targetSize( CONFIG.simulationResolution );
		const texture = this.targetSize( CONFIG.textureResolution );
		this.targets = {
			velocity: this.createDoubleFbo(
				simulation.width,
				simulation.height
			),
			pressure: this.createDoubleFbo(
				simulation.width,
				simulation.height
			),
			divergence: this.createFbo( simulation.width, simulation.height ),
			density: this.createDoubleFbo( texture.width, texture.height ),
		};
	}

	resize() {
		const dpr = Math.min( window.devicePixelRatio || 1, 2 );
		const rect = this.root.getBoundingClientRect();
		const width = Math.max( 1, Math.floor( rect.width * dpr ) );
		const height = Math.max( 1, Math.floor( rect.height * dpr ) );

		if ( this.canvas.width === width && this.canvas.height === height ) {
			return;
		}

		this.canvas.width = width;
		this.canvas.height = height;
		this.brushSize =
			rect.height > rect.width ? 1.2 / rect.width : 3.2 / rect.height;

		if ( this.gl ) {
			this.createRenderTargets();
		}
	}

	bindTexture( unit, texture ) {
		this.gl.activeTexture( this.gl.TEXTURE0 + unit );
		this.gl.bindTexture( this.gl.TEXTURE_2D, texture );
		return unit;
	}

	blit( target = null ) {
		this.gl.bindVertexArray( this.vao );

		if ( target ) {
			this.gl.viewport( 0, 0, target.width, target.height );
			this.gl.bindFramebuffer( this.gl.FRAMEBUFFER, target.fbo );
		} else {
			this.gl.viewport(
				0,
				0,
				this.gl.drawingBufferWidth,
				this.gl.drawingBufferHeight
			);
			this.gl.bindFramebuffer( this.gl.FRAMEBUFFER, null );
		}

		this.gl.drawElements( this.gl.TRIANGLES, 6, this.gl.UNSIGNED_SHORT, 0 );
	}

	clearTarget( target ) {
		this.gl.bindFramebuffer( this.gl.FRAMEBUFFER, target.fbo );
		this.gl.viewport( 0, 0, target.width, target.height );
		this.gl.clearColor( 0, 0, 0, 1 );
		this.gl.clear( this.gl.COLOR_BUFFER_BIT );
	}

	loadImage( url ) {
		return new Promise( ( resolve, reject ) => {
			const image = new Image();
			image.crossOrigin = 'anonymous';
			image.decoding = 'async';
			image.onload = () => {
				const texture = this.gl.createTexture();
				this.gl.bindTexture( this.gl.TEXTURE_2D, texture );
				this.gl.pixelStorei( this.gl.UNPACK_FLIP_Y_WEBGL, true );
				this.gl.texParameteri(
					this.gl.TEXTURE_2D,
					this.gl.TEXTURE_WRAP_S,
					this.gl.CLAMP_TO_EDGE
				);
				this.gl.texParameteri(
					this.gl.TEXTURE_2D,
					this.gl.TEXTURE_WRAP_T,
					this.gl.CLAMP_TO_EDGE
				);
				this.gl.texParameteri(
					this.gl.TEXTURE_2D,
					this.gl.TEXTURE_MIN_FILTER,
					this.gl.LINEAR
				);
				this.gl.texParameteri(
					this.gl.TEXTURE_2D,
					this.gl.TEXTURE_MAG_FILTER,
					this.gl.LINEAR
				);
				this.gl.texImage2D(
					this.gl.TEXTURE_2D,
					0,
					this.gl.RGBA,
					this.gl.RGBA,
					this.gl.UNSIGNED_BYTE,
					image
				);
				resolve( {
					texture,
					width: image.naturalWidth,
					height: image.naturalHeight,
				} );
			};
			image.onerror = reject;
			image.src = url;
		} );
	}

	ensureTexture( index ) {
		const wrappedIndex = index % this.images.length;

		if ( this.textures[ wrappedIndex ] ) {
			return Promise.resolve( this.textures[ wrappedIndex ] );
		}

		if ( ! this.texturePromises[ wrappedIndex ] ) {
			this.texturePromises[ wrappedIndex ] = this.loadImage(
				this.images[ wrappedIndex ].url
			).then( ( texture ) => {
				this.textures[ wrappedIndex ] = texture;
				return texture;
			} );
		}

		return this.texturePromises[ wrappedIndex ];
	}

	preloadUpcoming() {
		const upcomingIndex = ( this.nextIndex + 1 ) % this.images.length;

		this.ensureTexture( upcomingIndex ).catch( () => {
			this.root.classList.add( 'is-liquid-hero-fallback' );
		} );
	}

	splat( x, y, dx, dy, colorBoost = 1 ) {
		const rect = this.root.getBoundingClientRect();
		const pointX = ( x - rect.left ) / rect.width;
		const pointY = 1 - ( y - rect.top ) / rect.height;

		let u = this.use( this.programs.splat );
		this.gl.uniform1i(
			u.uInput,
			this.bindTexture( 0, this.targets.velocity.read.texture )
		);
		this.gl.uniform1f( u.uRatio, this.canvas.width / this.canvas.height );
		this.gl.uniform2f( u.uPoint, pointX, pointY );
		this.gl.uniform3f( u.uPointValue, dx, -dy, colorBoost );
		this.gl.uniform1f( u.uPointSize, this.brushSize );
		this.blit( this.targets.velocity.write );
		this.targets.velocity.swap();

		u = this.use( this.programs.splat );
		this.gl.uniform1i(
			u.uInput,
			this.bindTexture( 0, this.targets.density.read.texture )
		);
		this.gl.uniform1f( u.uRatio, this.canvas.width / this.canvas.height );
		this.gl.uniform2f( u.uPoint, pointX, pointY );
		this.gl.uniform3f( u.uPointValue, 1, 0.9, 0.75 );
		this.gl.uniform1f( u.uPointSize, this.brushSize * 0.48 );
		this.blit( this.targets.density.write );
		this.targets.density.swap();
	}

	stepFluid( dt ) {
		let u = this.use( this.programs.divergence );
		this.gl.uniform2f(
			u.uTexel,
			this.targets.velocity.texelX,
			this.targets.velocity.texelY
		);
		this.gl.uniform1i(
			u.uVelocity,
			this.bindTexture( 0, this.targets.velocity.read.texture )
		);
		this.blit( this.targets.divergence );

		this.clearTarget( this.targets.pressure.write );

		u = this.use( this.programs.pressure );
		this.gl.uniform2f(
			u.uTexel,
			this.targets.velocity.texelX,
			this.targets.velocity.texelY
		);
		this.gl.uniform1i(
			u.uDivergence,
			this.bindTexture( 0, this.targets.divergence.texture )
		);

		for ( let i = 0; i < CONFIG.pressureIterations; i += 1 ) {
			this.gl.uniform1i(
				u.uPressure,
				this.bindTexture( 1, this.targets.pressure.read.texture )
			);
			this.blit( this.targets.pressure.write );
			this.targets.pressure.swap();
		}

		u = this.use( this.programs.gradientSubtract );
		this.gl.uniform2f(
			u.uTexel,
			this.targets.velocity.texelX,
			this.targets.velocity.texelY
		);
		this.gl.uniform1i(
			u.uPressure,
			this.bindTexture( 0, this.targets.pressure.read.texture )
		);
		this.gl.uniform1i(
			u.uVelocity,
			this.bindTexture( 1, this.targets.velocity.read.texture )
		);
		this.blit( this.targets.velocity.write );
		this.targets.velocity.swap();

		u = this.use( this.programs.advection );
		this.gl.uniform2f(
			u.uTexel,
			this.targets.velocity.texelX,
			this.targets.velocity.texelY
		);
		this.gl.uniform2f(
			u.uVelocityTexel,
			this.targets.velocity.texelX,
			this.targets.velocity.texelY
		);
		this.gl.uniform2f(
			u.uInputTexel,
			this.targets.velocity.texelX,
			this.targets.velocity.texelY
		);
		this.gl.uniform1i(
			u.uVelocity,
			this.bindTexture( 0, this.targets.velocity.read.texture )
		);
		this.gl.uniform1i(
			u.uInput,
			this.bindTexture( 1, this.targets.velocity.read.texture )
		);
		this.gl.uniform1f( u.uDt, dt );
		this.gl.uniform1f( u.uDissipation, CONFIG.velocityFade );
		this.blit( this.targets.velocity.write );
		this.targets.velocity.swap();

		u = this.use( this.programs.advection );
		this.gl.uniform2f(
			u.uTexel,
			this.targets.velocity.texelX,
			this.targets.velocity.texelY
		);
		this.gl.uniform2f(
			u.uVelocityTexel,
			this.targets.velocity.texelX,
			this.targets.velocity.texelY
		);
		this.gl.uniform2f(
			u.uInputTexel,
			this.targets.density.texelX,
			this.targets.density.texelY
		);
		this.gl.uniform1i(
			u.uVelocity,
			this.bindTexture( 0, this.targets.velocity.read.texture )
		);
		this.gl.uniform1i(
			u.uInput,
			this.bindTexture( 1, this.targets.density.read.texture )
		);
		this.gl.uniform1f( u.uDt, dt );
		this.gl.uniform1f( u.uDissipation, CONFIG.densityFade );
		this.blit( this.targets.density.write );
		this.targets.density.swap();
	}

	measureRevealCoverage() {
		const pixel = new Float32Array( 4 );
		let revealed = 0;

		this.gl.bindFramebuffer(
			this.gl.FRAMEBUFFER,
			this.targets.density.read.fbo
		);

		for ( let x = 0; x < CONFIG.revealProbeColumns; x += 1 ) {
			for ( let y = 0; y < CONFIG.revealProbeRows; y += 1 ) {
				this.gl.readPixels(
					Math.floor(
						( this.targets.density.width * ( x + 0.5 ) ) /
							CONFIG.revealProbeColumns
					),
					Math.floor(
						( this.targets.density.height * ( y + 0.5 ) ) /
							CONFIG.revealProbeRows
					),
					1,
					1,
					this.gl.RGBA,
					this.gl.FLOAT,
					pixel
				);

				if ( Math.max( pixel[ 0 ], pixel[ 1 ], pixel[ 2 ] ) > 0.24 ) {
					revealed += 1;
				}
			}
		}

		return (
			revealed / ( CONFIG.revealProbeColumns * CONFIG.revealProbeRows )
		);
	}

	ease( value ) {
		const t = Math.min( Math.max( value, 0 ), 1 );
		return t * t * ( 3 - 2 * t );
	}

	startFinishReveal( now ) {
		this.isFinishing = true;
		this.finishStart = now;
		this.finishBlend = 0;
		this.pointer.splats.length = 0;
	}

	stirFinishReveal( now ) {
		const time = now * 0.001;
		const radius =
			Math.min( this.root.clientWidth, this.root.clientHeight ) * 0.18;
		const rect = this.root.getBoundingClientRect();

		for ( let i = 0; i < 3; i += 1 ) {
			const angle = time * 3.2 + ( i * Math.PI * 2 ) / 3;
			this.splat(
				rect.left + rect.width * 0.5 + Math.cos( angle ) * radius,
				rect.top + rect.height * 0.5 + Math.sin( angle ) * radius,
				Math.cos( angle + Math.PI * 0.5 ) * 34,
				Math.sin( angle + Math.PI * 0.5 ) * 34,
				1.05
			);
		}
	}

	finishReveal() {
		this.isFinishing = false;
		this.finishBlend = 0;
		this.imageIndex = this.nextIndex;
		this.nextIndex = ( this.nextIndex + 1 ) % this.images.length;
		this.preloadUpcoming();
		this.clearTarget( this.targets.velocity.read );
		this.clearTarget( this.targets.velocity.write );
		this.clearTarget( this.targets.density.read );
		this.clearTarget( this.targets.density.write );
	}

	draw( now ) {
		this.resize();
		const dt = Math.min( ( now - this.lastFrame ) / 1000, 0.016 );
		this.lastFrame = now;

		if ( this.pointer.splats.length ) {
			const splats = this.pointer.splats.splice( 0 );

			for ( const item of splats ) {
				this.splat( item.x, item.y, item.dx, item.dy, 1 );
			}
		}

		if ( this.isFinishing ) {
			const elapsed = now - this.finishStart;

			if ( elapsed < CONFIG.finishBurstMs ) {
				this.stirFinishReveal( now );
			} else {
				this.finishBlend = this.ease(
					( elapsed - CONFIG.finishBurstMs ) / CONFIG.finishFadeMs
				);
			}
		}

		this.stepFluid( dt );

		const current = this.textures[ this.imageIndex ];
		const next = this.textures[ this.nextIndex ];

		if ( ! current || ! next ) {
			this.ensureTexture( this.nextIndex ).catch( () => {
				this.root.classList.add( 'is-liquid-hero-fallback' );
			} );
			this.raf = requestAnimationFrame( ( timestamp ) =>
				this.draw( timestamp )
			);
			return;
		}

		const u = this.use( this.programs.display );
		this.gl.uniform1i(
			u.uFluid,
			this.bindTexture( 0, this.targets.density.read.texture )
		);
		this.gl.uniform1i( u.uImageA, this.bindTexture( 1, current.texture ) );
		this.gl.uniform1i( u.uImageB, this.bindTexture( 2, next.texture ) );
		this.gl.uniform2f(
			u.uCanvasSize,
			this.canvas.width,
			this.canvas.height
		);
		this.gl.uniform2f( u.uImageASize, current.width, current.height );
		this.gl.uniform2f( u.uImageBSize, next.width, next.height );
		this.gl.uniform1f( u.uFinishBlend, this.finishBlend );
		this.blit();

		this.frameCount += 1;

		if (
			this.isFinishing &&
			now - this.finishStart >= CONFIG.finishBurstMs + CONFIG.finishFadeMs
		) {
			this.finishReveal();
		} else if ( ! this.isFinishing && this.frameCount % 8 === 0 ) {
			const coverage = this.measureRevealCoverage();

			if ( coverage >= CONFIG.revealThreshold ) {
				this.startFinishReveal( now );
			}
		}

		this.raf = requestAnimationFrame( ( timestamp ) =>
			this.draw( timestamp )
		);
	}

	onPointerMove( event ) {
		const previousX = this.pointer.x || event.clientX;
		const previousY = this.pointer.y || event.clientY;
		this.pointer.x = event.clientX;
		this.pointer.y = event.clientY;
		this.pointer.dx = ( this.pointer.x - previousX ) * 5;
		this.pointer.dy = ( this.pointer.y - previousY ) * 5;

		const distance = Math.hypot(
			this.pointer.x - previousX,
			this.pointer.y - previousY
		);
		const steps = Math.max( 1, Math.ceil( distance / 76 ) );

		for ( let i = 1; i <= steps; i += 1 ) {
			const amount = i / steps;
			this.pointer.splats.push( {
				x: previousX + ( this.pointer.x - previousX ) * amount,
				y: previousY + ( this.pointer.y - previousY ) * amount,
				dx: this.pointer.dx,
				dy: this.pointer.dy,
			} );
		}
	}

	onPointerDown( event ) {
		this.pointer.x = event.clientX;
		this.pointer.y = event.clientY;
		this.pointer.splats.push( {
			x: event.clientX,
			y: event.clientY,
			dx: 32,
			dy: 32,
		} );
	}
}

const liquidHeroBlocks = Array.from(
	document.querySelectorAll( BLOCK_SELECTOR )
);

setupMobileScrollLock( liquidHeroBlocks );

liquidHeroBlocks.forEach( ( root ) => {
	const liquidHero = new LiquidHero( root );
	liquidHero.start().catch( () => {
		root.classList.add( 'is-liquid-hero-fallback' );
	} );
} );
