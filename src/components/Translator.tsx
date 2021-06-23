import styled from 'styled-components';
import Wrapper from './Wrapper';
import LanguagesBar from './LanguagesBar';
import TextBox from './TextBox';

const StyledTranslator = styled.main`
	margin-top: 4em;
`;

const Grid = styled.div`
	display: grid;
	gap: 2rem;
	@media (min-width: 56.25em) {
		gap: 0;
		grid-template-columns: repeat(2, 1fr);
	}
`;

function Translator() {
	return (
		<StyledTranslator>
			<Wrapper>
				<Grid>
					<LanguagesBar />
					<TextBox />
					<TextBox />
				</Grid>
			</Wrapper>
		</StyledTranslator>
	);
}

export default Translator;
