import React from 'react';

/*
 * @class FinishBoard
 * @extends React.Component
 */
class FinishBoard extends React.Component {

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
