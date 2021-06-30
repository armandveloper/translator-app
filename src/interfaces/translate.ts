export interface ITranslateResponse {
	data: IData;
}

export interface IData {
	translations: ITranslation[];
}

export interface ITranslation {
	translatedText: string;
}
