/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';
import Routes from './Routes/Routes';

function App() {
	alert(`Login: sancho@gmail.com /n Password: 123456`);
	const { checkAuth } = useAuth();
	useEffect(() => {
		if (localStorage.getItem('token')) {
			checkAuth();
		}
	}, []);

	return (
		<>
			<Routes />
		</>
	);
}

export default App;
