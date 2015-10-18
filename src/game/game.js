import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import InitialBoard from './components/InitialBoard';
import NameGameBoard from './components/NameGameBoard';
import FinishBoard from './components/FinishBoard';

/*
 * @class Game to remember WillowTree employee faces/names.
 */
class Game extends React.Component {

  /**
   * @constructor
   */
  constructor(options) {
    super(options);
    this.state = {
      employees: [],
      round: 0,
      correctAnswers: 0
    };
  }

  /**
   * @description Fetch the employees
   * TODO: handle graceful failure of REST API
   */
  componentDidMount () {
    fetch(this.props.url)
      .then(r => r.json())
      .then(data => this.setState({
        employees: data,
        init: true
      }));
  }

  render () {
    if (!this.state.init) {
      return <div>Loading...</div>;
    }
    return <div>
            <Jumbotron>
              <h1>WillowTree Name Game</h1>
              <p>How many names can you remember?</p>
            </Jumbotron>
            <ProgressBar active={this.inProgress()} bsStyle="success" now={this.getProgress()} />
            {this.getCurrentBoard()}
           </div>;
  }

  /**
   * @description display the appropriate part of the game
   */
  getCurrentBoard () {
    if (this.state.round === 0) {
      return this.getInitialBoard();
    } else if (this.inProgress()) {
      return this.getInPlayBoard();
    } else {
      return this.getEndBoard();
    }
  }

  /**
   * @description the initial board which explains how to play the game
   */
  getInitialBoard() {
    var randomEmployee = Math.floor(Math.random() * this.state.employees.length);
    return <InitialBoard employee={this.state.employees[randomEmployee]}
                         startCallback={this.startGame.bind(this)} />
  }

  /**
   * @description render the actual game board
   */
  getInPlayBoard() {
    return <NameGameBoard key={this.state.round}
                          employees={this.getEmployeesForRound()}
                          roundOver={this.roundOver.bind(this)} />;
  }

  /**
   * @description render the results
   */
  getEndBoard() {
    return <FinishBoard rounds={this.props.roundCount}
                        correct={this.state.correctAnswers} />
  }

  /**
   * @description transition from initial to ingame
   */
  startGame () {
    this.setState({
      round: 1
    });
  }

  /**
   * @description get 3 random unique employees
   */
  getEmployeesForRound() {
    var uniqueEmployeeIndices = [];
    var uniqueEmployees = [];
    while (uniqueEmployeeIndices.length < 3) {
      var candidate = Math.floor(Math.random() * this.state.employees.length);
      if (uniqueEmployeeIndices.indexOf(candidate) == -1) {
        uniqueEmployeeIndices.push(candidate);
        uniqueEmployees.push(this.state.employees[candidate]);
      }
    }
    return uniqueEmployees;
  }

  /**
   * @description Trigger the next round
   */
  roundOver(result) {
    this.setState({
      round: this.state.round + 1,
      correctAnswers: this.state.correctAnswers + (result ? 1 : 0)
    })
  }

  /**
   * @description return the user's progress through the current game (0 - 100)
   */
  getProgress() {
    return (this.state.round / this.props.roundCount) * 100;
  }

  /**
   * @description Is the user somewhere between the beginning and the end
   */
  inProgress() {
    return (this.state.round > 0) && (this.state.round <= this.props.roundCount);
  }

}

Game.propTypes = {
  url: React.PropTypes.string.isRequired,
  roundCount: React.PropTypes.number.isRequired
};

export default Game;
