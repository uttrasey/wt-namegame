import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

/*
 * @class Employee
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
    return <Thumbnail style={{'display': 'inline-block'}}
                      src={this.props.employee.url}>
             <h3>{this.props.employee.name}</h3>
           </Thumbnail>;
  }
}

// Prop types validation
Employee.propTypes = {
  employee: React.PropTypes.object.isRequired,
};

export default Employee;
