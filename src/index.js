import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import './css/app_element.css';
import './css/mobile/m_main.css';
import './css/mobile/m_app_element.css';
import 'antd/dist/reset.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
