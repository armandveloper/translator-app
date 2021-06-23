import styled from 'styled-components';
import { MdSwapHoriz } from 'react-icons/md';

const StyledBar = styled.div`
	grid-column: 1 / -1;
	display: flex;
	margin-bottom: 3rem;
	padding: 0 2rem;
	box-shadow: 0 0 5px 2px #424242;
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
	cursor: pointer;
	padding: 0.8rem 1.5rem;
	text-align: center;
	user-select: none;
	transition: background-color 0.3s ease;
	display: inline-flex;
	align-items: center;
	&:hover,
	&:focus {
		background-color: var(--color-bg-3);
	}
	&.selected {
		border-bottom: 3px solid var(--color-primary);
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

function LanguagesBar() {
	return (
		<StyledBar>
			<LanguageList>
				<LanguageItem className="selected">
					Detect Language
				</LanguageItem>
				<LanguageItem>English</LanguageItem>
				<LanguageItem>Spanish</LanguageItem>
			</LanguageList>
			<SwapLanguage title="Swap Language">
				<MdSwapHoriz color="currentColor" size="28" />
			</SwapLanguage>
			<LanguageList>
				<LanguageItem>English</LanguageItem>
				<LanguageItem>Spanish</LanguageItem>
			</LanguageList>
		</StyledBar>
	);
}

export default LanguagesBar;
