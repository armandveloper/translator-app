import { Dispatch, SetStateAction } from 'react';
import { createContext, ReactNode, useState } from 'react';
import LanguageList, { LanguageInfo } from '../constants/languages';
import * as dictionary from '../helpers/translations';

interface TranslateContextInt {
	sourceText: string;
	resultText: string;
	languageInfo: LanguageInfo;
	swapLanguages(): void;
	setLanguageInfo: Dispatch<SetStateAction<LanguageInfo>>;
}

export const TranslateContext = createContext({} as TranslateContextInt);

export const TranslateProvider = ({ children }: { children: ReactNode }) => {
	const [sourceText, setSourceText] = useState('');

	const [resultText, setResultText] = useState('');

	const [languageInfo, setLanguageInfo] = useState<LanguageInfo>({
		source: 'en-US',
		result: 'es-US',
	});

	const swapLanguages = (): void => {
		const aux: LanguageList = languageInfo.source;
		setLanguageInfo({ source: languageInfo.result, result: aux });
	};

	return (
		<TranslateContext.Provider
			value={{
				sourceText,
				resultText,
				languageInfo,
				swapLanguages,
				setLanguageInfo,
			}}
		>
			{children}
		</TranslateContext.Provider>
	);
};
