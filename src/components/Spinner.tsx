import styled from 'styled-components';
import { spinnerGrowAnimation } from '../styles/animations';

const Spinner = styled.div.attrs((props) => ({
	role: 'status',
	'aria-label': props['aria-label'] || 'Loading...',
}))`
	background-color: var(--color-primary);
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	opacity: 0;
	animation: ${spinnerGrowAnimation} 0.75s linear infinite;
`;

export default Spinner;
