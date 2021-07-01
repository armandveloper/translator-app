import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import Switch from './Switch';
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
	const { theme } = useContext(ThemeContext);

	return (
		<header>
			<Wrapper>
				<HeaderContent>
					<Title>Translate</Title>
					<Switch checked={theme === 'dark'} />
				</HeaderContent>
			</Wrapper>
		</header>
	);
}

export default Header;
