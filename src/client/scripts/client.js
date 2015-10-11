import Debug from 'debug';
import Game from '../../game';

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
