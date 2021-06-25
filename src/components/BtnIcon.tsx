import styled from 'styled-components';

interface BtnIconProps {
	show?: boolean;
}

const BtnIcon = styled.button<BtnIconProps>`
	background: none;
	border: none;
	color: inherit;
	cursor: pointer;
	display: inline-block;
	margin: 0;
	padding: 1.2rem;
	text-align: center;
	opacity: ${({ show = true }) => (show ? '1' : '0')};
	visibility: ${({ show = true }) => (show ? 'visible' : 'hidden')};
	transition: 0.3s ease-out;
`;

export default BtnIcon;
