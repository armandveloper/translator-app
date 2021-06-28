import { useRef } from 'react';
import { MdContentCopy, MdVolumeUp } from 'react-icons/md';
import { TranslateBoxProps } from '../constants/languages';
import useSpeechSynthesis from '../hooks/useSpeechSynthesis';
import * as clipboard from '../helpers/clipboard';
import TextBox, { Actions, TextArea } from './TextBox';
import BtnIcon from './BtnIcon';
import BtnWithPlayState from './BtnWithPlayState';

function ResultBox({ language }: TranslateBoxProps) {
	const text: string =
		'Hola a todos como están yo me encuentro muy bien gracias';

	const textAreaRef = useRef<HTMLTextAreaElement>(null!);

	const [isSpeechSynthesisSupported, textToSpeech, cancelSpeechSynthesis] =
		useSpeechSynthesis(text, language);

	return (
		<TextBox>
			<TextArea ref={textAreaRef} defaultValue={text} readOnly={true} />
			<Actions>
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
				<BtnIcon
					show={text.length > 0}
					aria-label="Copy translation"
					data-title="Copy translation"
					onClick={() => clipboard.copy(text, textAreaRef.current)}
				>
					<MdContentCopy size="24" color="currentColor" />
				</BtnIcon>
			</Actions>
		</TextBox>
	);
}

export default ResultBox;
