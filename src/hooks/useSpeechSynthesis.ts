const useSpeechSynthesis = (
	text: string,
	language: string
): [(onEnd: () => void) => void] => {
	const textToSpeech = (onEnd: () => void) => {
		const utterance: SpeechSynthesisUtterance =
			new SpeechSynthesisUtterance(text);
		utterance.onend = onEnd;
		utterance.lang = language;
		window.speechSynthesis.speak(utterance);
	};

	return [textToSpeech];
};

export default useSpeechSynthesis;
