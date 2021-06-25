import styled from 'styled-components';
import { textBoxStyles } from '../styles/mixins';

const TextBox = styled.div`
	${textBoxStyles};
`;

export const Actions = styled.div`
	display: flex;
	align-items: center;
`;

export const TextArea = styled.textarea`
	background: none;
	border: none;
	color: var(--color-text);
	display: block;
	font-family: inherit;
	font-size: 1.6rem;
	line-height: 1.6;
	min-height: 17rem;
	height: auto;
	resize: none;
	overflow: hidden;
	padding-bottom: 2rem;
	padding-right: 1rem;
	width: 100%;
	&:focus {
		outline: none;
	}
`;

// function calcHeight(scrollHeight: number): number {
// 	console.log('scroll height:', scrollHeight);
// 	if (!scrollHeight) return 170;
// 	// Height / line height
// 	const lines = Math.ceil(scrollHeight / 25.6);
// 	// min-height + lines x line-height + padding + border
// 	const newHeight = Math.ceil(lines * 25.6);
// 	console.log(lines);
// 	return newHeight;
// }

export default TextBox;
