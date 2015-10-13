import React from 'react';

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
    return <div className="employee">
              <img src={this.props.employee.url} />
              <p>{this.props.employee.name}</p>
           </div>
  }
}

// Prop types validation
Employee.propTypes = {
  employee: React.PropTypes.object.isRequired,
};

export default Employee;
