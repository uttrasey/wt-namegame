import React from 'react';
import ReactDOM from 'react-dom';
import config from '../../../config/app';
import Game from '../../game';

var gameNode = document.getElementById('game');
ReactDOM.render(<Game url={config.apiUrl} />, gameNode);



/*
 * @description async get the employee data then render the game
 */
// request(config.apiUrl, function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//       var employees = JSON.parse(body);
//       renderGame(employees);
//     }
// });
