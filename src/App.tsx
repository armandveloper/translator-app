import { lazy, Suspense } from 'react';
import LoadingFallback from './components/LoadingFallback';
const ThemeProvider = lazy(() =>
	import('./context/ThemeContext').then(({ ThemeProvider }) => ({
		default: ThemeProvider,
	}))
);
const TranslateProvider = lazy(() =>
	import('./context/TranslateContext').then(({ TranslateProvider }) => ({
		default: TranslateProvider,
	}))
);
const GlobalStyles = lazy(() => import('./styles/globalStyles'));
const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
	return (
		<Suspense fallback={<LoadingFallback />}>
			<ThemeProvider>
				<TranslateProvider>
					<GlobalStyles />
					<HomePage />
				</TranslateProvider>
			</ThemeProvider>
		</Suspense>
	);
}

export default App;
