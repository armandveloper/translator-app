import { lazy, Suspense } from 'react';
import LoadingFallback from '../components/LoadingFallback';
const Header = lazy(() => import('../components/Header'));
const Translator = lazy(() => import('../components/Translator'));

function HomePage() {
	return (
		<Suspense fallback={<LoadingFallback />}>
			<Header />
			<Translator />
		</Suspense>
	);
}

export default HomePage;
