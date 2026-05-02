<?php
/**
 * Plugin Name:       Liquid Hero Block
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       liquid-hero-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block from its compiled metadata.
 */
function create_block_liquid_hero_block_block_init() {
	register_block_type( __DIR__ . '/build/liquid-hero-block' );
}
add_action( 'init', 'create_block_liquid_hero_block_block_init' );
