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
import { ITranslateResponse } from '../interfaces/translate';
import useOnline from '../hooks/useOnline';

interface TranslateContextInt {
	isOnline: boolean;
	languageInfo: LanguageInfo;
	resultText: string;
	sourceText: string;
	clearText: () => void;
	setLanguageInfo: Dispatch<SetStateAction<LanguageInfo>>;
	setText: Dispatch<SetStateAction<string>>;
	swapLanguages: () => void;
	translate: (text: string, source: string, target: string) => Promise<void>;
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
		// Eliminar al agregar API
		setResultText(sourcetAux);
	};

	const clearText = () => setSourceText('');

	const baseURL =
			'https://google-translate1.p.rapidapi.com/language/translate/v2',
		apiKey = process.env.REACT_APP_API_KEY || '';

	const translate = useCallback(
		async (text: string, source: string, target: string): Promise<void> => {
			setResultText(text);
			// const headers: HeadersInit = new Headers();

			// headers.set('Content-Type', 'application/x-www-form-urlencoded');
			// headers.set('x-rapidapi-key', apiKey);

			// try {
			// 	const res = await fetch(baseURL, {
			// 		method: 'POST',
			// 		headers,
			// 		body: new URLSearchParams({
			// 			q: text,
			// 			source,
			// 			target,
			// 			format: 'text',
			// 		}),
			// 	});
			// 	console.log(res);
			// 	const result: ITranslateResponse = await res.json();
			// 	console.log(result);
			// 	setResultText(result.data.translations[0].translatedText);
			// } catch (err) {
			// 	console.log(err);
			// }
		},
		[apiKey]
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
			translate(
				sourceText,
				languageInfo.source.substring(0, 2),
				languageInfo.result.substr(0, 2)
			);
		}, 500);
	}, [isOnline, sourceText, translate, languageInfo]);

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
