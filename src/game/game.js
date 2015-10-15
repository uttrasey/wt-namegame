import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import request from 'request';

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
      round: 0
    };
  }

  /**
   * @description Load all the data and update state
   * TODO: handle graceful failure of REST API
   * TODO: use local storage to cache the API response
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

  startGame () {
    this.setState({
      round: 1
    });
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

  /**
   * @description the initial board which explains the game
   */
  getInitialBoard() {
    var employee = this.getExampleEmployee();
    var employeeStyle = {
      margin: '10px'
    };
    return <div className='initialBoard'>
              <div className='example'>
                <Image style={employeeStyle} src={employee.url} thumbnail />
                <h4>You will briefly see some faces like <b>{employee.name}</b>&apos;s then be asked to identify one!</h4>
              </div>
              <Button style={employeeStyle}
                      bsSize="large"
                      bsStyle="success"
                      onClick={this.startGame.bind(this)}>Lets get started!</Button>
           </div>

  }

  getExampleEmployee() {
    var employeeCount = this.state.employees.length;
    var exampleIndex = Math.floor(Math.random() * employeeCount);
    return this.state.employees[exampleIndex];
  }

  getInPlayBoard() {
    return <p>Playing!</p>;
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
