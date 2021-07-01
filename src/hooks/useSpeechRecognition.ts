import { Dispatch, SetStateAction } from 'react';

const useSpeechRecognition = (
	language: string,
	setText: Dispatch<SetStateAction<string>>
): [boolean, (onEnd: () => void) => void, () => void] => {
	const isSupported = window.SpeechRecognition !== undefined,
		isSupportedWithPrefix =
			(window as any).webkitSpeechRecognition !== undefined;

	let speech = isSupported
		? new SpeechRecognition()
		: isSupportedWithPrefix
		? new (window as any).webkitSpeechRecognition()
		: {};

	const onSpeak = (
		{ results }: SpeechRecognitionEvent,
		onEnd: () => void
	) => {
		const [result] = Array.from(results[0]),
			{ transcript } = result;
		setText(transcript);
		onEnd();
	};

	const startSpeechRecognition = (onEnd: () => void) => {
		speech.lang = language;
		speech.start();
		speech.addEventListener('result', (e: SpeechRecognitionEvent) =>
			onSpeak(e, onEnd)
		);
	};

	const abortSpeechRecognition = () => speech.abort();

	return [
		isSupported || isSupportedWithPrefix,
		startSpeechRecognition,
		abortSpeechRecognition,
	];
};

export default useSpeechRecognition;
