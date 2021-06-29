import { ThemeProvider } from './context/ThemeContext';
import { TranslateProvider } from './context/TranslateContext';
import GlobalStyles from './styles/globalStyles';
import HomePage from './pages/HomePage';

function App() {
	return (
		<ThemeProvider>
			<TranslateProvider>
				<GlobalStyles />
				<HomePage />
			</TranslateProvider>
		</ThemeProvider>
	);
}

export default App;
