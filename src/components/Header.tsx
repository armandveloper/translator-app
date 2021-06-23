import styled from 'styled-components';
import Wrapper from './Wrapper';

const Title = styled.h1`
	cursor: default;
	font-size: 3rem;
	font-weight: 500;
`;

const HeaderContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

function Header() {
	return (
		<header>
			<Wrapper>
				<HeaderContent>
					<Title>Translate</Title>
					<p>Theme switcher</p>
				</HeaderContent>
			</Wrapper>
		</header>
	);
}

export default Header;
