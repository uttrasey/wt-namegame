import React from 'react';
import classnames from 'classnames';
import shuffler from 'knuth-shuffle';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Employee from './Employee';
import SelectableEmployee from './SelectableEmployee';

/*
 * @class NameGameBoard
 * @extends React.Component
 */
class NameGameBoard extends React.Component {

  constructor (options) {
    super(options);
    this.state = {
      phase: 1, //1 is show, 2 is question, 3 is result (this can be done better)
      fade: false
    };
  }

  /**
   * @description do our stateful stuff up front and set timeouts for the round
   */
  componentDidMount () {
    var shuffledEmployees = shuffler.knuthShuffle(this.props.employees.slice(0));
    var correctAnswerIndex = Math.floor(Math.random() * shuffledEmployees.length);

    this.setState({
      shuffledEmployees: shuffledEmployees,
      correctAnswerIndex: correctAnswerIndex
    });

    // fade the faces out
    setTimeout(() => {
      this.setState({
        fade: true
      });
    }, 2500);

    // present the question
    setTimeout(() => {
      this.setState({
        phase: 2
      });
    }, 4500);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    var content;
    if (this.state.phase === 1) {
      content = this.presentEmployees();
    } else if (this.state.phase === 2) {
      content = this.presentQuestion();
    } else if (this.state.phase === 3) {
      content = this.presentResult();
    }
    return <div className='nameGameBoard'>
            {content}
          </div>;
  }

  presentEmployees () {
    var classes = classnames('canfade', { 'fade': this.state.fade });
    return <div className={classes}>
              <div>
                {this.props.employees.map((employee, i) => {
                  return (
                    <Employee key={i} employee={employee} />
                  );
                })}
              </div>
              <div>
                <h4>Get remembering!</h4>
              </div>
           </div>;
  }

  employeeSelected (selectedEmployeeIndex) {
    var correct = selectedEmployeeIndex === this.state.correctAnswerIndex;
    // send the answer back in half a second
    setTimeout(() => {
      this.props.roundOver(correct);
    }, 700);

    this.setState({
      phase: 3,
      userAnswer: selectedEmployeeIndex
    });
  }

  /**
   *
   */
  presentQuestion () {
    return <div>
              <div>
                {this.state.shuffledEmployees.map((employee, i) => {
                  return (
                    <SelectableEmployee key={i}
                                        employee={employee}
                                        employeeIndex={i}
                                        selectCallback={this.employeeSelected.bind(this)} />
                  );
                })}
              </div>
              <div>
                <h4>Click on {this.state.shuffledEmployees[this.state.correctAnswerIndex].name}!</h4>
              </div>
           </div>;
  }

  presentResult () {
    var result = (this.state.userAnswer === this.state.correctAnswerIndex);
    return <div>
              <div>
                {this.state.shuffledEmployees.map((employee, i) => {
                    if (this.state.userAnswer === i) {
                      return <Employee key={i} employee={employee} />;
                    }
                })}
              </div>
              <div>
                <h4>You did {result ? "good" : "bad"}!</h4>
              </div>
           </div>;
  }

}

NameGameBoard.propTypes = {
  employees: React.PropTypes.array.isRequired,
};

export default NameGameBoard;
