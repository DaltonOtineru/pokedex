import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/globals.css';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
