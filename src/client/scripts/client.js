import Debug from 'debug';
import Game from '../../game';

// import request from 'request';
// var employees;
// request('http://localhost:3000/api', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       employees = JSON.parse(body);
//     }
// });

var state = {
  cart: {
    title: 'My Cart',
    items: [
      {
        title: 'Item 1',
        price: 12
      },
      {
        title: 'Item 2',
        price: 21
      },
      {
        title: 'Item 3',
        price: 33
      }
    ]
  }
};

// build the game and render it
var gameElement = document.getElementById('game');

var game;

Debug.enable('nameGame*');

// Create new app and attach to element
game = new Game({
  state: state
});

game.renderToDOM(gameElement);
