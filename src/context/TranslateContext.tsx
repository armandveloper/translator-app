import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import LanguageList, { LanguageInfo } from '../constants/languages';
import * as dictionary from '../helpers/translations';

interface TranslateContextInt {
	languageInfo: LanguageInfo;
	resultText: string;
	sourceText: string;
	clearText: () => void;
	setLanguageInfo: Dispatch<SetStateAction<LanguageInfo>>;
	setText: Dispatch<SetStateAction<string>>;
	swapLanguages: () => void;
	translate: (text: string) => void;
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
		const aux: LanguageList = languageInfo.source,
			sourcetAux: string = sourceText;

		setLanguageInfo({ source: languageInfo.result, result: aux });
		setSourceText(resultText);
		setResultText(sourcetAux);
	};

	const clearText = () => setSourceText('');

	const translate = (text: string): void => {
		console.log(text);
		const result: string =
			languageInfo.source === 'en-US'
				? dictionary.en.get(text) || ''
				: dictionary.es.get(text) || '';

		console.log('after translate:', result);

		setSourceText(text);
		setResultText(result);
	};

	useEffect(() => {
		if (sourceText === '') setResultText('');
	}, [sourceText]);

	return (
		<TranslateContext.Provider
			value={{
				languageInfo,
				resultText,
				sourceText,
				clearText,
				setLanguageInfo,
				setText: setSourceText,
				swapLanguages,
				translate,
			}}
		>
			{children}
		</TranslateContext.Provider>
	);
};
