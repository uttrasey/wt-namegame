import React from 'react';
import Employee from './Employee';

/*
 * @class Employee
 * @extends React.Component
 */
class SelectableEmployee extends React.Component {

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <Employee employee={this.props.employee} showName={false} />;
  }
}

SelectableEmployee.propTypes = {
  employee: React.PropTypes.object.isRequired
};

export default SelectableEmployee;
