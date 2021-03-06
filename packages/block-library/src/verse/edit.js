/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	RichText,
	BlockControls,
	AlignmentToolbar,
	__experimentalBlock as Block,
} from '@wordpress/block-editor';

export default function VerseEdit( {
	attributes,
	setAttributes,
	className,
	mergeBlocks,
} ) {
	const { textAlign, content } = attributes;

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlign: nextAlign } );
					} }
				/>
			</BlockControls>
			<RichText
				tagName={ Block.pre }
				identifier="content"
				preserveWhiteSpace
				value={ content }
				onChange={ ( nextContent ) => {
					setAttributes( {
						content: nextContent,
					} );
				} }
				placeholder={ __( 'Write…' ) }
				className={ classnames( className, {
					[ `has-text-align-${ textAlign }` ]: textAlign,
				} ) }
				onMerge={ mergeBlocks }
				textAlign={ textAlign }
			/>
		</>
	);
}
