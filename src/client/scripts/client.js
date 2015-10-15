import React from 'react';
import ReactDOM from 'react-dom';
import config from '../../../config/app';
import Game from '../../game';

var gameNode = document.getElementById('game');
ReactDOM.render(<Game url={config.apiUrl} />, gameNode);
