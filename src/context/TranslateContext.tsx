import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import LanguageList, { LanguageInfo } from '../constants/languages';
import useOnline from '../hooks/useOnline';
import * as dictionary from '../helpers/translations';

interface TranslateContextInt {
	isOnline: boolean;
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

	const translate = useCallback(
		(text: string): void => {
			const result: string =
				languageInfo.source === 'en-US'
					? dictionary.en.get(text) || ''
					: dictionary.es.get(text) || '';

			setSourceText(text);
			setResultText(result);
		},
		[languageInfo.source]
	);

	useEffect(() => {
		if (sourceText === '') setResultText('');
	}, [sourceText, translate]);

	const timeoutID = useRef<number>(null!);

	const isOnline = useOnline();

	// Debouncer
	useEffect(() => {
		// Limpia el timeout anterior
		window.clearTimeout(timeoutID.current);
		if (!isOnline || !sourceText.trim()) return;
		// Si hay un término de mínimo 3 caracteres hace la llamada al api
		timeoutID.current = window.setTimeout(() => {
			translate(sourceText);
		}, 500);
	}, [isOnline, sourceText, translate]);

	return (
		<TranslateContext.Provider
			value={{
				isOnline,
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
