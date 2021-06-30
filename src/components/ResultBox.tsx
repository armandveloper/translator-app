import { useContext, useRef } from 'react';
import { MdContentCopy, MdVolumeUp } from 'react-icons/md';
import { TranslateBoxProps } from '../constants/languages';
import { TranslateContext } from '../context/TranslateContext';
import useSpeechSynthesis from '../hooks/useSpeechSynthesis';
import * as clipboard from '../helpers/clipboard';
import TextBox, { Actions, TextArea } from './TextBox';
import BtnIcon from './BtnIcon';
import BtnWithPlayState from './BtnWithPlayState';

function ResultBox({ language }: TranslateBoxProps) {
	const { resultText } = useContext(TranslateContext);

	const textAreaRef = useRef<HTMLTextAreaElement>(null!);

	const [isSpeechSynthesisSupported, textToSpeech, cancelSpeechSynthesis] =
		useSpeechSynthesis(resultText, language);

	return (
		<TextBox>
			<TextArea
				ref={textAreaRef}
				defaultValue={resultText}
				readOnly={true}
				placeholder="Translation"
				aria-label="Translation"
			/>
			<Actions>
				{isSpeechSynthesisSupported && (
					<BtnWithPlayState
						icon={<MdVolumeUp size="24" color="currentColor" />}
						label="Listen"
						show={resultText.length > 0}
						title="Listen"
						onClick={textToSpeech}
						onCancel={cancelSpeechSynthesis}
					/>
				)}
				<BtnIcon
					show={resultText.length > 0}
					aria-label="Copy translation"
					data-title="Copy translation"
					onClick={() =>
						clipboard.copy(resultText, textAreaRef.current)
					}
				>
					<MdContentCopy size="24" color="currentColor" />
				</BtnIcon>
			</Actions>
		</TextBox>
	);
}

export default ResultBox;
