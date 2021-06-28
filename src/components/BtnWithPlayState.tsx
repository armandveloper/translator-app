import { MouseEvent, ReactElement, useState } from 'react';
import { MdStop } from 'react-icons/md';
import { cancelSpeechSynthesis } from '../helpers/speech';
import BtnIcon from './BtnIcon';

interface BtnWithPlayStateProps {
	icon: ReactElement;
	label?: string;
	title?: string;
	show?: boolean;
	onClick: (onEnd: () => void) => void;
}

function BtnWithPlayState({
	icon,
	label,
	title,
	show,
	onClick,
}: BtnWithPlayStateProps) {
	const [isPlaying, setPlaying] = useState(false);

	const handlePlay = (e: MouseEvent<HTMLButtonElement>) => {
		setPlaying(!isPlaying);
		if (isPlaying) {
			cancelSpeechSynthesis();
			return;
		}
		// Esto cambia el icono de detener por el default
		onClick(() => {
			setPlaying(false);
		});
	};

	return (
		<div>
			<BtnIcon
				onClick={handlePlay}
				show={show}
				aria-label={label}
				data-title={title}
			>
				{isPlaying ? <MdStop size="24" color="currentColor" /> : icon}
			</BtnIcon>
		</div>
	);
}

export default BtnWithPlayState;
