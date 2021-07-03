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
import { ITranslateResponse } from '../interfaces/translate.interface';
import useOnline from '../hooks/useOnline';

interface TranslateContextInt {
	languageInfo: LanguageInfo;
	msgError: string;
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

	const [hasLimitExceeded, setLimitExceeded] = useState(false);

	const [msgError, setError] = useState('');

	const swapLanguages = (): void => {
		const aux: LanguageList = languageInfo.source,
			sourcetAux: string = sourceText;

		setLanguageInfo({ source: languageInfo.result, result: aux });
		setSourceText(resultText);
		// Eliminar al agregar API
		setResultText(sourcetAux);
	};

	const clearText = () => setSourceText('');

	const isOnline = useOnline();

	const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
		apiKey = process.env.REACT_APP_API_KEY || '';

	const translate = useCallback(
		async (text: string, source: string, target: string): Promise<void> => {
			try {
				const res = await fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'x-rapidapi-key': apiKey,
						'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
					},
					body: JSON.stringify({
						q: text,
						source,
						target,
					}),
				});
				if (res.status === 429) {
					setLimitExceeded(true);
					return;
				}
				if (res.status !== 200) {
					setError('Something Went Wrong');
					return;
				}

				const result: ITranslateResponse = await res.json();
				setResultText(result.data.translations.translatedText);
				// Si no hay otro tipo de errores, coloca como vaío el estado
				if (!hasLimitExceeded && isOnline) {
					setError('');
				}
			} catch (err) {
				console.error(err);
				setError('Something Went Wrong');
			}
		},
		[apiKey, isOnline, hasLimitExceeded]
	);

	useEffect(() => {
		if (sourceText === '') setResultText('');
	}, [sourceText, translate]);

	const timeoutID = useRef<number>(null!);

	// Mensajes de error
	useEffect(() => {
		if (hasLimitExceeded) {
			setError('You have exceeded the allowed character limit');
		} else if (!isOnline) {
			setError(
				'There seems to be a problem with the Internet connection. Translator functionality may be limited.'
			);
		} else {
			setError('');
		}
	}, [isOnline, hasLimitExceeded]);

	// Debouncer
	useEffect(() => {
		// Limpia el timeout anterior
		window.clearTimeout(timeoutID.current);
		if (hasLimitExceeded || !isOnline || !sourceText.trim()) return;
		// Si hay un término de mínimo 3 caracteres hace la llamada al api
		timeoutID.current = window.setTimeout(() => {
			translate(
				sourceText,
				languageInfo.source.substring(0, 2),
				languageInfo.result.substr(0, 2)
			);
		}, 500);
	}, [hasLimitExceeded, isOnline, sourceText, translate, languageInfo]);

	return (
		<TranslateContext.Provider
			value={{
				languageInfo,
				msgError,
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
