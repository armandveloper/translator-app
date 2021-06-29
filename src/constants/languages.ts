type LanguageList = 'en-US' | 'es-US';

export type TranslateBoxProps = {
	language: LanguageList;
};

export type LanguageInfo = { source: LanguageList; result: LanguageList };

export default LanguageList;
