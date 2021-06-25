import { MouseEvent, MouseEventHandler, ReactElement, useState } from 'react';
import { MdStop } from 'react-icons/md';
import BtnIcon from './BtnIcon';

interface BtnWithPlayStateProps {
	icon: ReactElement;
	label?: string;
	title?: string;
	show?: boolean;
	onClick?: (
		e: MouseEvent<HTMLButtonElement>,
		onEnd: () => void
	) => void | undefined;
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
			window.speechSynthesis.cancel();
			return;
		}
		if (onClick) {
			onClick(e, () => {
				console.log('Finish');
				setPlaying(false);
			});
		}
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
