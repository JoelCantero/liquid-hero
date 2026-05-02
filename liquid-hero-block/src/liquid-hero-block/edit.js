/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const TEMPLATE = [
	[
		'core/heading',
		{
			content: 'Liquid Hero',
			level: 1,
			placeholder: 'Add heading...',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Paint across the hero to reveal the next image.',
			placeholder: 'Add text...',
		},
	],
];

const getPositionClass = ( contentPosition ) =>
	`is-position-${ contentPosition.replace( /\s+/g, '-' ) }`;

const MIN_HEIGHT_UNITS = [
	{ value: 'px', label: 'px', default: 720 },
	{ value: 'vh', label: 'vh', default: 100 },
];

const MIN_HEIGHT_LIMITS = {
	px: {
		min: 320,
		max: 1080,
		step: 10,
	},
	vh: {
		min: 20,
		max: 100,
		step: 1,
	},
};

const getMinHeightValue = ( minHeight, minHeightUnit = 'px' ) =>
	`${ minHeight }${ minHeightUnit }`;

const parseMinHeightValue = ( value, fallbackUnit = 'px' ) => {
	const match = String( value || '' )
		.trim()
		.match( /^(\d+(?:\.\d+)?)\s*([a-z%]+)?$/i );

	if ( ! match ) {
		return null;
	}

	return {
		minHeight: Number( match[ 1 ] ),
		minHeightUnit: match[ 2 ] || fallbackUnit,
	};
};

const normalizeImages = ( media = [] ) =>
	media
		.filter( Boolean )
		.map( ( image ) => ( {
			id: image.id,
			url:
				image.sizes?.full?.url ||
				image.sizes?.large?.url ||
				image.url ||
				image.source_url,
			alt: image.alt || image.alt_text || '',
			width: image.width || image.media_details?.width,
			height: image.height || image.media_details?.height,
		} ) )
		.filter( ( image ) => image.url );

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   root0               Component props.
 * @param {Object}   root0.attributes    Block attributes.
 * @param {Function} root0.setAttributes Updates block attributes.
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const {
		images,
		minHeight,
		minHeightUnit,
		overlayOpacity,
		contentPosition,
		disableMobileScroll,
	} = attributes;
	const hasImages = images.length > 0;
	const previewImage = images[ 0 ];
	const heightUnit = minHeightUnit || 'px';
	const heightLimits =
		MIN_HEIGHT_LIMITS[ heightUnit ] || MIN_HEIGHT_LIMITS.px;
	const blockProps = useBlockProps( {
		className: `has-custom-content-position ${ getPositionClass(
			contentPosition
		) }`,
		style: {
			minHeight: getMinHeightValue( minHeight, heightUnit ),
		},
	} );

	const onSelectImages = ( media ) => {
		setAttributes( {
			images: normalizeImages(
				Array.isArray( media ) ? media : [ media ]
			),
		} );
	};

	const imageIds = images.map( ( image ) => image.id ).filter( Boolean );

	if ( ! hasImages ) {
		return (
			<div { ...blockProps }>
				<MediaPlaceholder
					icon="format-gallery"
					labels={ {
						title: __( 'Liquid Hero', 'liquid-hero-block' ),
						instructions: __(
							'Choose several images. The front end will reveal them with a liquid displacement transition.',
							'liquid-hero-block'
						),
					} }
					allowedTypes={ [ 'image' ] }
					multiple
					gallery
					onSelect={ onSelectImages }
				/>
			</div>
		);
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={ [ 'image' ] }
							gallery
							multiple
							addToGallery
							value={ imageIds }
							onSelect={ onSelectImages }
							render={ ( { open } ) => (
								<ToolbarButton onClick={ open }>
									{ __(
										'Edit gallery',
										'liquid-hero-block'
									) }
								</ToolbarButton>
							) }
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody
					title={ __( 'Liquid hero settings', 'liquid-hero-block' ) }
				>
					<UnitControl
						__next40pxDefaultSize
						label={ __( 'Minimum height', 'liquid-hero-block' ) }
						value={ getMinHeightValue( minHeight, heightUnit ) }
						units={ MIN_HEIGHT_UNITS }
						min={ heightLimits.min }
						max={ heightLimits.max }
						step={ heightLimits.step }
						isResetValueOnUnitChange
						onChange={ ( value ) => {
							const nextValue = parseMinHeightValue(
								value,
								heightUnit
							);

							if ( nextValue ) {
								setAttributes( nextValue );
							}
						} }
					/>
					<ToggleControl
						label={ __(
							'Disable mobile page scroll',
							'liquid-hero-block'
						) }
						help={ __(
							'Prevents vertical page scrolling on mobile when this hero is used as a full viewport section.',
							'liquid-hero-block'
						) }
						checked={ disableMobileScroll }
						onChange={ ( value ) =>
							setAttributes( { disableMobileScroll: value } )
						}
					/>
					<RangeControl
						label={ __( 'Overlay opacity', 'liquid-hero-block' ) }
						value={ overlayOpacity }
						onChange={ ( value ) =>
							setAttributes( { overlayOpacity: value } )
						}
						min={ 0 }
						max={ 80 }
						step={ 5 }
					/>
					<SelectControl
						label={ __( 'Content position', 'liquid-hero-block' ) }
						value={ contentPosition }
						options={ [
							{
								label: __( 'Top left', 'liquid-hero-block' ),
								value: 'top left',
							},
							{
								label: __( 'Top center', 'liquid-hero-block' ),
								value: 'top center',
							},
							{
								label: __( 'Top right', 'liquid-hero-block' ),
								value: 'top right',
							},
							{
								label: __( 'Center left', 'liquid-hero-block' ),
								value: 'center left',
							},
							{
								label: __( 'Center', 'liquid-hero-block' ),
								value: 'center center',
							},
							{
								label: __(
									'Center right',
									'liquid-hero-block'
								),
								value: 'center right',
							},
							{
								label: __( 'Bottom left', 'liquid-hero-block' ),
								value: 'bottom left',
							},
							{
								label: __(
									'Bottom center',
									'liquid-hero-block'
								),
								value: 'bottom center',
							},
							{
								label: __(
									'Bottom right',
									'liquid-hero-block'
								),
								value: 'bottom right',
							},
						] }
						onChange={ ( value ) =>
							setAttributes( { contentPosition: value } )
						}
					/>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={ [ 'image' ] }
							gallery
							multiple
							addToGallery
							value={ imageIds }
							onSelect={ onSelectImages }
							render={ ( { open } ) => (
								<Button variant="secondary" onClick={ open }>
									{ __(
										'Edit image gallery',
										'liquid-hero-block'
									) }
								</Button>
							) }
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<img
					className="liquid-hero-block__preview-image"
					src={ previewImage.url }
					alt={ previewImage.alt }
				/>
				<span
					className="liquid-hero-block__overlay"
					style={ { opacity: overlayOpacity / 100 } }
				/>
				<div className="liquid-hero-block__inner-container">
					<InnerBlocks template={ TEMPLATE } />
				</div>
				<div className="liquid-hero-block__thumbs">
					{ images.map( ( image ) => (
						<img
							key={ image.id || image.url }
							src={ image.url }
							alt=""
							aria-hidden="true"
						/>
					) ) }
				</div>
			</div>
		</>
	);
}
