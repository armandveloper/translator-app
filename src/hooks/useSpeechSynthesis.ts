const useSpeechSynthesis = (
	text: string,
	language: string
): [boolean, (onEnd: () => void) => void] => {
	const isSupported: boolean =
		window.speechSynthesis !== undefined || window.speechSynthesis !== null;

	const textToSpeech = (onEnd: () => void) => {
		const utterance: SpeechSynthesisUtterance =
			new SpeechSynthesisUtterance(text);
		utterance.onend = onEnd;
		utterance.lang = language;
		window.speechSynthesis.speak(utterance);
	};

	return [isSupported, textToSpeech];
};

export default useSpeechSynthesis;
