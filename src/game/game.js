import React from 'react/addons';
import AppRoot from './components/AppRoot';

/*
 * @class Game
 */
class Game {

  /*
   * @constructs App
   * @param {Object} options
   */
  constructor(options) {
    this.state = options.state;
  }

  /*
   * @method render
   * @param {DOM} [element]
   * @returns {String|undefined}
   */
  render (element) {
    var appRootElement = React.createElement(AppRoot, {
      state: this.state
    });
    React.render(appRootElement, element);
  }

  /*
   * @method render
   * @param {DOM} element
   */
   renderToDOM (element) {
    this.render(element);
   }

}

export default Game;
