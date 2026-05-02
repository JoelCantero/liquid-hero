/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const getPositionClass = ( contentPosition ) =>
	`is-position-${ contentPosition.replace( /\s+/g, '-' ) }`;

const getMinHeightValue = ( minHeight, minHeightUnit = 'px' ) =>
	`${ minHeight }${ minHeightUnit }`;

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} root0            Component props.
 * @param {Object} root0.attributes Block attributes.
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	const {
		images,
		minHeight,
		minHeightUnit,
		overlayOpacity,
		contentPosition,
		disableMobileScroll,
	} = attributes;
	const hasImages = images.length > 0;
	const fallbackImage = images[ 0 ];
	const blockProps = useBlockProps.save( {
		className: `has-custom-content-position ${ getPositionClass(
			contentPosition
		) }`,
		style: {
			minHeight: getMinHeightValue( minHeight, minHeightUnit || 'px' ),
		},
		'data-liquid-images': JSON.stringify( images ),
		'data-liquid-lock-mobile-scroll': disableMobileScroll
			? 'true'
			: undefined,
	} );

	return (
		<div { ...blockProps }>
			{ hasImages && (
				<>
					<canvas
						className="liquid-hero-block__canvas"
						aria-hidden="true"
					/>
					<img
						className="liquid-hero-block__fallback-image"
						src={ fallbackImage.url }
						alt={ fallbackImage.alt || '' }
					/>
				</>
			) }
			<span
				className="liquid-hero-block__overlay"
				style={ { opacity: overlayOpacity / 100 } }
			/>
			<div className="liquid-hero-block__inner-container">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
