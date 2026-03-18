<?php
/**
 * Plugin Name: My Block
 * Description: Кастомный блок Group с абсолютным позиционированием.
 * Version: 1.0
 * Author: danver
 */

add_action('init', function()
{
    register_block_type(__DIR__);
});

