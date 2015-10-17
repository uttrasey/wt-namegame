import React from 'react';
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
      fade: false
    };
  }

  componentDidMount () {
    setTimeout(() => {
      this.hideFaces();
    }, 2200);
  }

  hideFaces() {
    this.setState({
      fade: true
    });
  }

  /*
   * @method render
   * TODO: loop through props.employees
   * @returns {JSX}
   */
  render () {
    return <div className='nameGameBoard'>
              <Employee key={1} employee={this.props.employees[0]} fade={this.state.fade} />
              <Employee key={2} employee={this.props.employees[1]} fade={this.state.fade} />
              <Employee key={3} employee={this.props.employees[2]} fade={this.state.fade} />
           </div>
  }

}

NameGameBoard.propTypes = {
  employees: React.PropTypes.array.isRequired,
};

export default NameGameBoard;
