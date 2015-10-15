import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Employee from './Employee';

/*
 * @class InitialBoard
 * @extends React.Component
 */
class InitialBoard extends React.Component {

  constructor(options) {
    super(options);
  }

  /*
   * TODO: is this needed? as static
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
    return <div className='initialBoard'>
              <Employee employee={this.props.employee} />
              <h4>You will briefly see some faces then be asked to identify one!</h4>
              <Button bsSize="large"
                      bsStyle="success" onClick={this.startClicked.bind(this)}>Lets get started!</Button>
           </div>
  }

  startClicked () {
    this.props.startCallback();
  }

}

InitialBoard.propTypes = {
  employee: React.PropTypes.object.isRequired,
};

export default InitialBoard;
