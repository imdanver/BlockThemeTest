// import { registerBlockType } from '@wordpress/blocks';
// import { useBlockProps } from '@wordpress/block-editor';

const registerBlockType = wp.blocks.registerBlockType

console.log('hi')

registerBlockType('danver/myblock', {
    edit() {
        return "Edit"
    },
    save() {
        return "Save"
    }
})
