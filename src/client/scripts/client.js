import Debug from 'debug';
import request from 'request';
import config from '../../../config/app';
import Game from '../../game';

Debug.enable('nameGame*');

// get hold of the API data
request(config.apiUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var employees = JSON.parse(body);
      renderGame(employees);
    }
});

/*
 * @description render the game
 */
function renderGame(employees) {
  var gameElement = document.getElementById('game');
  var game = new Game({
    state: {
      employees: employees
    },
  });
  game.renderToDOM(gameElement);
}
