import { MdContentCopy, MdVolumeUp } from 'react-icons/md';
import { TranslateBoxProps } from '../constants/languages';
import TextBox, { Actions, TextArea } from './TextBox';
import BtnIcon from './BtnIcon';

function ResultBox({ language }: TranslateBoxProps) {
	return (
		<TextBox>
			<TextArea />
			<Actions>
				<BtnIcon aria-label="Listen" data-title="Listen">
					<MdVolumeUp size="24" color="currentColor" />
				</BtnIcon>
				<BtnIcon
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
