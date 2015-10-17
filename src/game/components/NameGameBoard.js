import React from 'react';
import classnames from 'classnames';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Employee from './Employee';

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
   * TODO: loop through props.employees
   * TODO: always render the main div here (ternary immediately invoked)
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

  presentQuestion () {
    var chosenEmployee = Math.floor(Math.random() * 3);
    return <div>
              <div>
                <Employee key={1} employee={this.props.employees[1]} showName={false} />
                <Employee key={2} employee={this.props.employees[2]} showName={false} />
                <Employee key={3} employee={this.props.employees[0]} showName={false} />
              </div>
              <div>
                <h4>Click on <b>{this.props.employees[2].name}</b></h4>
              </div>
          </div>;
  }

}

NameGameBoard.propTypes = {
  employees: React.PropTypes.array.isRequired,
};

export default NameGameBoard;
