import styled from 'styled-components';
import Spinner from './Spinner';

const Styled = styled.div`
	background-color: var(--color-bg);
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

function LoadingFallback() {
	return (
		<Styled>
			<Spinner />
		</Styled>
	);
}

export default LoadingFallback;
