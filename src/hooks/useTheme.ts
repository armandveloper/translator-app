import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type AppTheme = 'light' | 'dark';

const useTheme = (): [AppTheme, Dispatch<SetStateAction<AppTheme>>] => {
	const [theme, setTheme] = useState<AppTheme>('dark');

	useEffect(() => {
		const handleColorScheme = (e: MediaQueryListEvent) => {
			setTheme(e.matches ? 'light' : 'dark');
		};

		const lsTheme = window.localStorage.getItem('translator-app:theme');

		if (lsTheme === 'light') {
			setTheme(lsTheme);
			return;
		}
		const mql: MediaQueryList = window.matchMedia(
			'(prefers-color-scheme: light)'
		);

		if (mql.matches) {
			setTheme('light');
		}

		mql.addEventListener('change', handleColorScheme);

		return () => mql.removeEventListener('change', handleColorScheme);
	}, []);

	useEffect(() => {
		window.localStorage.setItem('translator-app:theme', theme);
		document.body.className = theme;
	}, [theme]);

	return [theme, setTheme];
};

export default useTheme;
