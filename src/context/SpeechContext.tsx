import { createContext, ReactNode } from 'react';

interface SpeechContextInt {
	hello: string;
}

export const SpeechContext = createContext({} as SpeechContextInt);

export const SpeechProvider = ({ children }: { children: ReactNode }) => {
	const hello = '';

	return (
		<SpeechContext.Provider
			value={{
				hello,
			}}
		>
			{children}
		</SpeechContext.Provider>
	);
};
