import { Dispatch, MouseEvent, SetStateAction } from 'react';
import styled from 'styled-components';
import { MdSwapHoriz } from 'react-icons/md';
import Languages, { LanguageInfo } from '../constants/languages';

interface LanguagesBarProps {
	sourceLanguage: Languages;
	resultLanguage: Languages;
	swapLanguages(): void;
	setLanguageInfo: Dispatch<SetStateAction<LanguageInfo>>;
}

const StyledBar = styled.div`
	grid-column: 1 / -1;
	display: flex;
	margin-bottom: 3rem;
	padding: 0 2rem;
	box-shadow: 0 0 5px 2px var(--color-bg-3);
	border-radius: 10rem;
`;

const LanguageList = styled.ul`
	flex: 1;
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	&:last-of-type {
		justify-content: flex-end;
	}
`;

const LanguageItem = styled.li`
	border-bottom: 3px solid transparent;
	color: var(--color-primary);
	cursor: pointer;
	padding: 0.8rem 1.5rem;
	text-align: center;
	user-select: none;
	transition: 0.3s ease;
	display: inline-flex;
	align-items: center;
	&:hover,
	&:focus {
		background-color: var(--color-bg-3);
	}

	&:not(.selected) {
		display: none;
	}
	@media (min-width: 56.25em) {
		color: var(--color-text);
		&.selected {
			border-bottom-color: var(--color-primary);
		}
		&:not(.selected) {
			display: inline-flex;
		}
	}
`;

const SwapLanguage = styled.button`
	background-color: var(--color-primary);
	border: none;
	border-radius: 50%;
	color: #fff;
	cursor: pointer;
	height: 5rem;
	margin: 0;
	padding: 0;
	width: 5rem;
	/* position: relative;
	top: -2rem; */
`;

function LanguagesBar({
	sourceLanguage,
	resultLanguage,
	swapLanguages,
	setLanguageInfo,
}: LanguagesBarProps) {
	const handleSourceClick = (event: MouseEvent<HTMLLIElement>) => {
		const language = event.currentTarget.dataset.lang as Languages;
		if (language === resultLanguage) {
			swapLanguages();
			return;
		}
		setLanguageInfo({ result: resultLanguage, source: language });
	};

	const handleResultClick = (event: MouseEvent<HTMLLIElement>) => {
		const language = event.currentTarget.dataset.lang as Languages;
		if (language === sourceLanguage) {
			swapLanguages();
			return;
		}
		setLanguageInfo({ source: sourceLanguage, result: language });
	};

	return (
		<StyledBar>
			<LanguageList>
				{/* <LanguageItem>Detect Language</LanguageItem> */}
				<LanguageItem
					onClick={handleSourceClick}
					data-lang="en-US"
					className={sourceLanguage === 'en-US' ? 'selected' : ''}
				>
					English
				</LanguageItem>
				<LanguageItem
					onClick={handleSourceClick}
					data-lang="es-US"
					className={sourceLanguage === 'es-US' ? 'selected' : ''}
				>
					Spanish
				</LanguageItem>
			</LanguageList>
			<SwapLanguage
				aria-label="Swap Language"
				data-title="Swap Language"
				onClick={swapLanguages}
			>
				<MdSwapHoriz color="currentColor" size="28" />
			</SwapLanguage>
			<LanguageList>
				<LanguageItem
					onClick={handleResultClick}
					data-lang="en-US"
					className={resultLanguage === 'en-US' ? 'selected' : ''}
				>
					English
				</LanguageItem>
				<LanguageItem
					onClick={handleResultClick}
					data-lang="es-US"
					className={resultLanguage === 'es-US' ? 'selected' : ''}
				>
					Spanish
				</LanguageItem>
			</LanguageList>
		</StyledBar>
	);
}

export default LanguagesBar;
