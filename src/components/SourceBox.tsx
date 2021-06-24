import styled from 'styled-components';
import { MdMic, MdVolumeUp } from 'react-icons/md';
import TextBox, { Actions, TextArea } from './TextBox';
import BtnIcon from './BtnIcon';

const CharactersCounter = styled.span`
	margin-left: auto;
`;

function SourceBox() {
	return (
		<TextBox>
			<TextArea />
			<Actions>
				<BtnIcon title="Translate by voice">
					<MdMic size="24" color="currentColor" />
				</BtnIcon>
				<BtnIcon title="Listen">
					<MdVolumeUp size="24" color="currentColor" />
				</BtnIcon>
				<CharactersCounter>0 / 2000</CharactersCounter>
			</Actions>
		</TextBox>
	);
}

export default SourceBox;
