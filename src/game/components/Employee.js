import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Image from 'react-bootstrap/lib/Image';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

/*
 * @class Employee
 * @extends React.Component
 */
class Employee extends React.Component {

  shouldComponentUpdate () {
    return PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <Thumbnail style={{'display': 'inline-block'}}
                      src={this.props.employee.url}>
               {(() => {
                  if (this.props.showName) {
                    return <h3>{this.props.employee.name}</h3>;
                  }
               })()}
           </Thumbnail>;
  }
}

Employee.propTypes = {
  employee: React.PropTypes.object.isRequired,
  showName: React.PropTypes.bool
};

Employee.defaultProps = {
  showName: true
};

export default Employee;
