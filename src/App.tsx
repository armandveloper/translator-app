import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/globalStyles';
import HomePage from './pages/HomePage';

function App() {
	return (
		<ThemeProvider>
			<GlobalStyles />
			<HomePage />
		</ThemeProvider>
	);
}

export default App;
