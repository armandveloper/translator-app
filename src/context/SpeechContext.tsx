import { createContext, ReactNode } from 'react';
import useVoices from '../hooks/useVoices';

interface SpeechContextInt {
	voices: SpeechSynthesisVoice[];
}

export const SpeechContext = createContext({} as SpeechContextInt);

export const SpeechProvider = ({ children }: { children: ReactNode }) => {
	const voices = useVoices();

	return (
		<SpeechContext.Provider
			value={{
				voices: voices,
			}}
		>
			{children}
		</SpeechContext.Provider>
	);
};
