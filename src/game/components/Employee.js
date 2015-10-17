import React from 'react';
import classnames from 'classnames'
import Image from 'react-bootstrap/lib/Image';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

/*
 * @class Employee
 * @extends React.Component
 */
class Employee extends React.Component {

  /**
   * @constructor
   */
  constructor (options) {
    super(options);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    var classes = classnames('canfade', { 'fade': this.props.fade });
    return <Thumbnail style={{'display': 'inline-block'}}
                      src={this.props.employee.url}>
             <h3 className={classes}>{this.props.employee.name}</h3>
           </Thumbnail>;
  }
}

Employee.propTypes = {
  employee: React.PropTypes.object.isRequired,
  fade: React.PropTypes.bool
};

Employee.defaultProps = { fade: false };

export default Employee;
