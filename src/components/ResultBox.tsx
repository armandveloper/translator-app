import TextBox, { Actions, TextArea } from './TextBox';
import BtnIcon from './BtnIcon';
import { MdContentCopy, MdVolumeUp } from 'react-icons/md';

function ResultBox() {
	return (
		<TextBox>
			<TextArea />
			<Actions>
				<BtnIcon title="Listen">
					<MdVolumeUp size="24" color="currentColor" />
				</BtnIcon>
				<BtnIcon title="Copy translation">
					<MdContentCopy size="24" color="currentColor" />
				</BtnIcon>
			</Actions>
		</TextBox>
	);
}

export default ResultBox;
