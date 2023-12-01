import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import {AuthProvider} from './app/Auth/Context/auth.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
    <AuthProvider>
            <App />
    </AuthProvider>, 
    document.getElementById('root')
);