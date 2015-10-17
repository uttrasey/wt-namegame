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
      questionTime: false,
      fade: false
    };
  }

  componentDidMount () {
    // fade the faces out
    setTimeout(() => {
      this.setState({
        fade: true
      });
    }, 2500);

    // present the question
    setTimeout(() => {
      this.setState({
        questionTime: true
      });
    }, 4500);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    var content = this.state.questionTime ? this.presentQuestion() : this.presentEmployees();
    return <div className='nameGameBoard'>
            {content}
          </div>;
  }

  presentEmployees () {
    var classes = classnames('canfade', { 'fade': this.state.fade });
    return <div className={classes}>
              <div>
                {this.props.employees.map(function(employee, i) {
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

  /**
   * TODO: showName now hidden down in SelectableEmployee
   */
  presentQuestion () {
    var shuffledEmployees = shuffler.knuthShuffle(this.props.employees.slice(0));
    var chosenEmployeeIndex = Math.floor(Math.random() * shuffledEmployees.length);
    return <div>
              <div>
                {shuffledEmployees.map(function(employee, i) {
                  return (
                    <SelectableEmployee key={i} employee={employee} />
                  );
                })}
              </div>
              <div>
                <h4>Click on {shuffledEmployees[chosenEmployeeIndex].name}!</h4>
              </div>
           </div>;
  }

}

NameGameBoard.propTypes = {
  employees: React.PropTypes.array.isRequired,
};

export default NameGameBoard;
