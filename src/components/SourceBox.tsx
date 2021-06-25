import { ChangeEvent, MouseEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { MdClear, MdMic, MdVolumeUp } from 'react-icons/md';
import { TranslateBoxProps } from '../constants/languages';
import { SpeechContext } from '../context/SpeechContext';
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
	const [text, setText] = useState('');
	const charactersLimit = 2000;

	const handleChange = ({
		currentTarget,
	}: ChangeEvent<HTMLTextAreaElement>) => {
		setText(currentTarget.value.substring(0, charactersLimit));
	};

	const clearText = () => setText('');

	const { voices } = useContext(SpeechContext);

	console.log(voices);

	const speechText = (
		e: MouseEvent<HTMLButtonElement>,
		onEnd: () => void
	) => {
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.onend = onEnd;
		utterance.lang = language;
		utterance.voice =
			voices.find(({ lang }) => lang.includes(language)) || null;
		console.log(utterance.voice);
		window.speechSynthesis.speak(utterance);
	};

	const stopSpeech = () => window.speechSynthesis.cancel();

	const handleTogglePlay = () => {};

	const onSpeak = ({ results }: SpeechRecognitionEvent) => {
		console.log('on end');
		console.log(results);
		const [result] = Array.from(results[0]),
			{ transcript } = result;
		console.log(transcript);
	};

	const recognizeSpeech = () => {
		let speech;
		if (window.SpeechRecognition) {
			speech = new SpeechRecognition();
		} else if ((window as any).webkitSpeechRecognition) {
			speech = new (window as any).webkitSpeechRecognition();
		}
		console.log(speech);
		speech.start();
		speech.addEventListener('result', onSpeak);
	};

	return (
		<TextBox>
			<BtnClear
				show={text.length > 0}
				aria-label="Clear source text"
				data-title="Clear source text"
				data-tooltip-pos="right"
				onClick={clearText}
			>
				<MdClear size="24" color="currentColor" />
			</BtnClear>
			<TextArea
				maxLength={charactersLimit}
				value={text}
				onChange={handleChange}
			/>
			<Actions>
				{window.SpeechRecognition ||
					((window as any).webkitSpeechRecognition && (
						<BtnWithPlayState
							onClick={recognizeSpeech}
							label="Translate by voice"
							title="Translate by voice"
							icon={<MdMic size="24" color="currentColor" />}
						/>
					))}

				{window.speechSynthesis && (
					<BtnWithPlayState
						onClick={speechText}
						show={text.length > 0}
						label="Listen"
						title="Listen"
						icon={<MdVolumeUp size="24" color="currentColor" />}
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
