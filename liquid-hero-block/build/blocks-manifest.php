<?php
// This file is generated. Do not modify it manually.
return array(
	'liquid-hero-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/liquid-hero-block',
		'version' => '0.1.0',
		'title' => 'Liquid Hero Block',
		'category' => 'media',
		'icon' => 'format-image',
		'description' => 'A cover-style hero that reveals a gallery of images with a liquid displacement effect.',
		'example' => array(
			
		),
		'attributes' => array(
			'images' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'minHeight' => array(
				'type' => 'number',
				'default' => 720
			),
			'minHeightUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'overlayOpacity' => array(
				'type' => 'number',
				'default' => 0
			),
			'contentPosition' => array(
				'type' => 'string',
				'default' => 'bottom left'
			),
			'disableMobileScroll' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'anchor' => true,
			'html' => false,
			'spacing' => array(
				'margin' => array(
					'top',
					'bottom'
				),
				'padding' => true
			),
			'color' => array(
				'text' => true,
				'background' => false
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			)
		),
		'textdomain' => 'liquid-hero-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
