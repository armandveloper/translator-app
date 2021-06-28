export const copy = (
	text: string,
	element: HTMLInputElement | HTMLTextAreaElement
): Promise<void> => {
	if (window.navigator.clipboard !== undefined) {
		return window.navigator.clipboard.writeText(text);
	}
	return new Promise((res) => {
		element.select();
		window.document.execCommand('copy');
		window.getSelection()?.removeAllRanges();
		res();
	});
};
