import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
alert(`
	Login: sancho@gmail.com
	Password: 123456`);

ReactDOM.render(
	<AuthContextProvider>
		<App />
	</AuthContextProvider>,
	document.getElementById('root')
);
