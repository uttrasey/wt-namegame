import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import shuffler from 'knuth-shuffle';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Selectable from './Selectable';
import Employee from './Employee';

/*
 * @class NameGameBoard representing a round of the game
 * @extends React.Component
 */
class NameGameBoard extends React.Component {

  shouldComponentUpdate () {
    return PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  /**
   * @constructor
   */
  constructor (options) {
    super(options);
    this.state = {
      phase: 1,
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

    // then present the question
    setTimeout(() => {
      this.setState({
        phase: 2
      });
    }, 4500);
  }

  /**
   * @description callback for when an employee is selected
   */
  employeeSelected (selectedEmployeeIndex) {
    var correct = selectedEmployeeIndex === this.state.correctAnswerIndex;

    setTimeout(() => {
      this.props.roundOver(correct);
    }, 1000);

    this.setState({
      phase: 3,
      userAnswer: selectedEmployeeIndex
    });
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className='board'>
              {(() => {
                switch (this.state.phase) {
                  case 1: return this.presentEmployees();
                  case 2: return this.presentQuestion();
                  case 3: return this.presentResult();
                }
              })()}
          </div>;
  }

  /**
   * @description present phase 1, employee information
   */
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
                <h3>Memorize these people quick...</h3>
              </div>
           </div>;
  }

  /**
   * @description present phase 2, the question
   */
  presentQuestion () {
    return <div>
              <div>
                {this.state.shuffledEmployees.map((employee, i) => {
                  var employeeComponent = <Employee key={i}
                                                    employee={employee}
                                                    showName={false} />;
                  return (
                    <Selectable key={i}
                                selectCallback={this.employeeSelected.bind(this)}
                                item={i}
                                content={employeeComponent}>
                    </Selectable>
                  );
                })}
              </div>
              <div>
                <h4>Click on {this.state.shuffledEmployees[this.state.correctAnswerIndex].name}!</h4>
              </div>
           </div>;
  }

  /**
   * @description present phase 3, the result the users answer
   */
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
                <h3>{result ? "Well done!" : "Unlucky"}!</h3>
              </div>
           </div>;
  }

}

NameGameBoard.propTypes = {
  employees: React.PropTypes.array.isRequired,
};

export default NameGameBoard;
