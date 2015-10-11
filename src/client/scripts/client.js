import Debug from 'debug';
import request from 'request';
import Game from '../../game';

function renderGame(employees) {
  var state = {
    cart: {
      title: 'My Cart',
      items: [
        {
          title: 'Item 1',
          price: 12
        }
      ]
    },
    employees: employees
  };
  var game;
  var gameElement = document.getElementById('game');
  Debug.enable('nameGame*');
  game = new Game({
    state: state
  });
  game.renderToDOM(gameElement);
}

var employees;
request('http://localhost:3000/api', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      employees = JSON.parse(body);
      renderGame(employees);
    }
});
