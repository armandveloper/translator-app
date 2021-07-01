export interface ITranslateResponse {
	data: IData;
}

export interface IData {
	translations: ITranslations;
}

export interface ITranslations {
	translatedText: string;
}
