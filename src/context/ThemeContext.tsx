import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';
import AppTheme from '../constants/theme';
import useTheme from '../hooks/useTheme';

interface ThemeContextInt {
	theme: AppTheme;
	setTheme: Dispatch<SetStateAction<AppTheme>>;
}

export const ThemeContext = createContext({} as ThemeContextInt);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useTheme();

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
