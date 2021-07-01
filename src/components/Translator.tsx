import { useContext } from 'react';
import styled from 'styled-components';
import { TranslateContext } from '../context/TranslateContext';
import Wrapper from './Wrapper';
import LanguagesBar from './LanguagesBar';
import SourceBox from './SourceBox';
import ResultBox from './ResultBox';
import Alert from './Alert';

const StyledTranslator = styled.main`
	margin: 2rem 0;
`;

const Grid = styled.div`
	position: relative;
	display: grid;
	gap: 2rem;
	@media (min-width: 56.25em) {
		gap: 0;
		grid-template-columns: repeat(2, 1fr);
	}
`;

function Translator() {
	const { languageInfo, msgError, swapLanguages, setLanguageInfo } =
		useContext(TranslateContext);

	return (
		<StyledTranslator>
			<Wrapper>
				<Grid>
					<Alert severity="error" show={msgError !== ''}>
						{msgError}
					</Alert>
					<LanguagesBar
						sourceLanguage={languageInfo.source}
						resultLanguage={languageInfo.result}
						swapLanguages={swapLanguages}
						setLanguageInfo={setLanguageInfo}
					/>
					<SourceBox language={languageInfo.source} />
					<ResultBox language={languageInfo.result} />
				</Grid>
			</Wrapper>
		</StyledTranslator>
	);
}

export default Translator;
