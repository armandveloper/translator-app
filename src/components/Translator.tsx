import { useState } from 'react';
import styled from 'styled-components';
import LanguageList from '../constants/languages';
import Wrapper from './Wrapper';
import LanguagesBar from './LanguagesBar';
import SourceBox from './SourceBox';
import ResultBox from './ResultBox';

const StyledTranslator = styled.main`
	margin-top: 4em;
	margin-bottom: 2rem;
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
	// const languages = ['en', 'es'];
	const [sourceLanguage, setSourceLanguage] = useState<LanguageList>('en');
	const [resultLanguage, setResultLanguage] = useState<LanguageList>('es');

	const swapLanguages = (): void => {
		const aux: LanguageList = sourceLanguage;
		setSourceLanguage(resultLanguage);
		setResultLanguage(aux);
	};

	return (
		<StyledTranslator>
			<Wrapper>
				<Grid>
					<LanguagesBar
						sourceLanguage={sourceLanguage}
						resultLanguage={resultLanguage}
						swapLanguages={swapLanguages}
						setSourceLanguage={setSourceLanguage}
						setResultLanguage={setResultLanguage}
					/>
					<SourceBox />
					<ResultBox />
				</Grid>
			</Wrapper>
		</StyledTranslator>
	);
}

export default Translator;
