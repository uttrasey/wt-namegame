import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

/*
 * @class FinishBoard
 * @extends React.Component
 */
class FinishBoard extends React.Component {

  shouldComponentUpdate () {
    return PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className='board'>
              <h4>All finished!! You got {this.props.correct} out of {this.props.rounds}</h4>
           </div>
  }

}

FinishBoard.propTypes = {
  rounds: React.PropTypes.number.isRequired,
  correct: React.PropTypes.number.isRequired
};

export default FinishBoard;
