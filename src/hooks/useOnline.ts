import { useEffect, useState } from 'react';

const useOnline = (): boolean => {
	const [isOnline, setOnline] = useState(window.navigator.onLine);

	useEffect(() => {
		const updateOnlineState = () => setOnline(window.navigator.onLine);

		window.addEventListener('online', updateOnlineState);
		window.addEventListener('offline', updateOnlineState);

		return () => {
			window.removeEventListener('online', updateOnlineState);
			window.removeEventListener('offline', updateOnlineState);
		};
	}, []);

	return isOnline;
};

export default useOnline;
