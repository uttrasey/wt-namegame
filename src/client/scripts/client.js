import Debug from 'debug';
import App from '../../app';
import Game from '../../game';

var attachElement = document.getElementById('app');

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

var app;

Debug.enable('myApp*');

// Create new app and attach to element
app = new App({
  state: state
});

app.renderToDOM(attachElement);

// build the game and render it
var gameElement = document.getElementById('game');

var game;

Debug.enable('nameGame*');

// Create new app and attach to element
game = new Game({
  state: state
});

game.renderToDOM(gameElement);
