import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App.jsx';
import 'normalize.css'
import './styles/style.scss'

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(React.createElement(App, null, null))
