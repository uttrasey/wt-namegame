import React from 'react';
import Image from 'react-bootstrap/lib/Image';

/*
 * @class Item
 * @extends React.Component
 */
class Employee extends React.Component {

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    var employeeStyle = {
      margin: '10px'
    };
    return <div className='employee'>
              <Image style={employeeStyle} src={this.props.employee.url} thumbnail />
              <h4>{this.props.employee.name}</h4>
           </div>;
  }
}

// Prop types validation
Employee.propTypes = {
  employee: React.PropTypes.object.isRequired,
};

export default Employee;
