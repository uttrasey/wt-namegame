import React from 'react';
import Employee from './Employee';

/*
 * @class SelectableEmployee
 * @extends React.Component
 */
class SelectableEmployee extends React.Component {

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div onClick={this.onClick.bind(this)}
                className={this.props.status}
                style={{'display': 'inline-block'}}>
            <Employee employee={this.props.employee} showName={false} />;
           </div>
  }

  /**
   * @description send the selected answer back up
   */
  onClick () {
    this.props.selectCallback(this.props.employeeIndex);
  }

}

SelectableEmployee.propTypes = {
  employee: React.PropTypes.object.isRequired,
  employeeIndex: React.PropTypes.number.isRequired,
  selectCallback: React.PropTypes.func.isRequired,
  status: React.PropTypes.string
};

SelectableEmployee.defaultProps = { status: "normal" };

export default SelectableEmployee;
