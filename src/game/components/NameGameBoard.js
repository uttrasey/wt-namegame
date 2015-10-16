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

  componentDidMount () {
    setInterval(() => {
      this.hideFaces();
    }, 2200);
  }

  hideFaces() {
    // this.setState({
    //   fade: true
    // });
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className='nameGameBoard'>
            <Employee employee={this.props.employees[0]} />
            <Employee employee={this.props.employees[1]} />
            <Employee employee={this.props.employees[2]} />
           </div>
  }

}

NameGameBoard.propTypes = {
  employees: React.PropTypes.array.isRequired,
};

export default NameGameBoard;
