import React from 'react';
import Employee from './Employee';

/*
 * @class Cart
 * @extends React.Component
 */
class GameBoard extends React.Component {

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className="GameBoard">
      <ul>
        {this.props.employees.map(function (item, key) {
          return <Employee key={key} employee={item} />;
        })}
      </ul>
    </div>;
  }
}

// Prop types validation
GameBoard.propTypes = {
  employees: React.PropTypes.array.isRequired,
};

export default GameBoard;
