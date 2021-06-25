import { ThemeProvider } from './context/ThemeContext';
import { SpeechProvider } from './context/SpeechContext';
import GlobalStyles from './styles/globalStyles';
import HomePage from './pages/HomePage';

function App() {
	return (
		<ThemeProvider>
			<SpeechProvider>
				<GlobalStyles />
				<HomePage />
			</SpeechProvider>
		</ThemeProvider>
	);
}

export default App;
