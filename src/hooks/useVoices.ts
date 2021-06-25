import { useEffect, useState } from 'react';

const useVoices = (): SpeechSynthesisVoice[] => {
	const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(
		window.speechSynthesis.getVoices()
	);

	useEffect(() => {
		const getVoices = () => {
			console.log('new voices');
			setVoices(window.speechSynthesis.getVoices());
		};

		window.speechSynthesis.addEventListener('voiceschanged', getVoices);
		return () =>
			window.speechSynthesis.removeEventListener(
				'voiceschanged',
				getVoices
			);
	}, []);

	return voices;
};

export default useVoices;
