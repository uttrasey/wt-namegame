import React from 'react/addons';

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
    return <li className="employee">{this.props.employee.name} - {this.props.employee.url}</li>;
  }
}

// Prop types validation
Employee.propTypes = {
  employee: React.PropTypes.object.isRequired,
};

export default Employee;
