import { ChangeEvent, useContext, useRef } from 'react';
import styled from 'styled-components';
import { MdClear, MdMic, MdVolumeUp } from 'react-icons/md';
import { TranslateBoxProps } from '../constants/languages';
import { TranslateContext } from '../context/TranslateContext';
import useSpeechSynthesis from '../hooks/useSpeechSynthesis';
import useSpeechRecognition from '../hooks/useSpeechRecognition';
import TextBox, { Actions, TextArea } from './TextBox';
import BtnIcon from './BtnIcon';
import BtnWithPlayState from './BtnWithPlayState';

const CharactersCounter = styled.span`
	margin-left: auto;
`;

const BtnClear = styled(BtnIcon)`
	padding: 0.6rem;
	position: absolute !important;
	right: 0;
	top: 2rem;
`;

function SourceBox({ language }: TranslateBoxProps) {
	const charactersLimit = 200;

	const {
		sourceText: text,
		clearText,
		setText,
	} = useContext(TranslateContext);

	const handleChange = ({
		currentTarget,
	}: ChangeEvent<HTMLTextAreaElement>) => {
		setText(currentTarget.value.substring(0, charactersLimit));
	};

	const [isSpeechSynthesisSupported, textToSpeech, cancelSpeechSynthesis] =
		useSpeechSynthesis(text, language);

	const [
		isSpeechRecognitionSupported,
		startSpeechRecognition,
		abortSpeechRecognition,
	] = useSpeechRecognition(language, setText);

	const textAreaRef = useRef<HTMLTextAreaElement>(null!);

	const handleClear = () => {
		const event = new Event('input', { bubbles: true });
		textAreaRef.current.value = '';
		textAreaRef.current.dispatchEvent(event);
		clearText();
	};

	return (
		<TextBox>
			<BtnClear
				show={text.length > 0}
				aria-label="Clear source text"
				data-title="Clear source text"
				data-tooltip-pos="right"
				onClick={handleClear}
			>
				<MdClear size="24" color="currentColor" />
			</BtnClear>
			<TextArea
				aria-label="Enter the source text"
				maxLength={charactersLimit}
				ref={textAreaRef}
				rows={2}
				value={text}
				onChange={handleChange}
			/>
			<Actions>
				{isSpeechRecognitionSupported && (
					<BtnWithPlayState
						icon={<MdMic size="24" color="currentColor" />}
						label="Translate by voice"
						title="Translate by voice"
						onClick={startSpeechRecognition}
						onCancel={abortSpeechRecognition}
					/>
				)}

				{isSpeechSynthesisSupported && (
					<BtnWithPlayState
						icon={<MdVolumeUp size="24" color="currentColor" />}
						label="Listen"
						show={text.length > 0}
						title="Listen"
						onClick={textToSpeech}
						onCancel={cancelSpeechSynthesis}
					/>
				)}
				<CharactersCounter>
					{text.length} / {charactersLimit}
				</CharactersCounter>
			</Actions>
		</TextBox>
	);
}

export default SourceBox;
