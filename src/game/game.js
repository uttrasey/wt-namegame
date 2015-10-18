import React from 'react';
import request from 'request';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import InitialBoard from './components/InitialBoard';
import NameGameBoard from './components/NameGameBoard';

/*
 * @class Game representing the game board.
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
   * @description Load all the data and update state
   * TODO: handle graceful failure of REST API
   */
  componentDidMount () {
    request(this.props.url, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var employees = JSON.parse(body);
        this.setState({
          employees: employees,
          init: true
        });
      }
    }.bind(this));
  }

  /**
   * @description Top level render of name game application
   */
  render () {
    if (!this.state.init) {
      return null;
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

  getCurrentBoard () {
    if (this.state.round === 0) {
      return this.getInitialBoard();
    } else if (this.state.round === this.props.roundCount) {
      return this.getEndBoard();
    } else {
      return this.getInPlayBoard();
    }
  }

  startGame () {
    this.setState({
      round: 1
    });
  }

  /**
   * @description the initial board which explains how to play the game
   */
  getInitialBoard() {
    return <InitialBoard employee={this.getExampleEmployee()}
                         startCallback={this.startGame.bind(this)} />
  }

  getExampleEmployee() {
    var employeeCount = this.state.employees.length;
    var exampleIndex = Math.floor(Math.random() * employeeCount);
    return this.state.employees[exampleIndex];
  }

  getEmployeesForRound() {
    var employeeCount = this.state.employees.length;
    var uniqueEmployeeIndices = [];
    var uniqueEmployees = [];
    while (uniqueEmployeeIndices.length < 3) {
      var candidate = Math.floor(Math.random() * employeeCount);
      if (uniqueEmployeeIndices.indexOf(candidate) == -1) {
        uniqueEmployeeIndices.push(candidate);
        uniqueEmployees.push(this.state.employees[candidate]);
      }
    }
    return uniqueEmployees;
  }

  getInPlayBoard() {
    return <NameGameBoard key={this.state.round}
                          employees={this.getEmployeesForRound()}
                          roundOver={this.roundOver.bind(this)} />;
  }

  roundOver(result) {
    this.setState({
      round: this.state.round + 1,
      correctAnswers: this.state.correctAnswers + (result ? 1 : 0)
    })
  }

  getEndBoard() {
    return <p>Finished!</p>;
  }

  /**
   * @description Get users progress through the current game (0 - 100)
   */
  getProgress() {
    return (this.state.round / this.props.roundCount) * 100;
  }

  /**
   * Is the user playing? i.e. started and finished
   */
  inProgress() {
    return this.state.round > 0 && this.state.round <= this.props.roundCount;
  }

}

export default Game;
