const useSpeechSynthesis = (
	text: string,
	language: string
): [boolean, (onEnd: () => void) => void, () => void] => {
	const isSupported: boolean = window.speechSynthesis !== undefined;

	const textToSpeech = (onEnd: () => void) => {
		const utterance: SpeechSynthesisUtterance =
			new SpeechSynthesisUtterance(text);
		utterance.onend = onEnd;
		utterance.lang = language;
		window.speechSynthesis.speak(utterance);
	};

	const cancelSpeechSynthesis = () => window.speechSynthesis.cancel();

	return [isSupported, textToSpeech, cancelSpeechSynthesis];
};

export default useSpeechSynthesis;
