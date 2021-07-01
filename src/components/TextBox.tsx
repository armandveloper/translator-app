import { FormEvent } from 'react';
import styled from 'styled-components';
import { textBoxStyles } from '../styles/mixins';

const TextBox = styled.div`
	${textBoxStyles};
`;

export const Actions = styled.div`
	display: flex;
	align-items: center;
`;

const handleAutoGrow = ({ currentTarget }: FormEvent<HTMLTextAreaElement>) => {
	currentTarget.style.height = 'auto';
	currentTarget.style.height = `${currentTarget.scrollHeight}px`;
};

export const TextArea = styled.textarea.attrs((props) => ({
	...props,
	onInput: handleAutoGrow,
}))`
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
	&::placeholder {
		color: currentColor;
		opacity: 0.79;
		font-size: 2.4rem;
	}
`;

export default TextBox;
