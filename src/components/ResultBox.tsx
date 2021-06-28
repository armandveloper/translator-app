import { MdContentCopy, MdVolumeUp } from 'react-icons/md';
import { TranslateBoxProps } from '../constants/languages';
import * as clipboard from '../helpers/clipboard';
import TextBox, { Actions, TextArea } from './TextBox';
import BtnIcon from './BtnIcon';
import { useRef } from 'react';

function ResultBox({ language }: TranslateBoxProps) {
	const text: string =
		'Hola a todos como están yo me encuentro muy bien gracias';

	const textAreaRef = useRef<HTMLTextAreaElement>(null!);

	return (
		<TextBox>
			<TextArea ref={textAreaRef} defaultValue={text} readOnly={true} />
			<Actions>
				<BtnIcon aria-label="Listen" data-title="Listen">
					<MdVolumeUp size="24" color="currentColor" />
				</BtnIcon>
				<BtnIcon
					onClick={() => clipboard.copy(text, textAreaRef.current)}
					aria-label="Copy translation"
					data-title="Copy translation"
				>
					<MdContentCopy size="24" color="currentColor" />
				</BtnIcon>
			</Actions>
		</TextBox>
	);
}

export default ResultBox;
