import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Button from 'react-bootstrap/lib/Button';
import Employee from './Employee';

/*
 * @class InitialBoard
 * @extends React.Component
 */
class InitialBoard extends React.Component {

  shouldComponentUpdate () {
    return PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className='board'>
              <Employee employee={this.props.employee} />
              <h4>Put a name to the face before they disappear!</h4>
              <Button bsSize="large"
                      bsStyle="success"
                      onClick={this.startClicked.bind(this)}>
                  Lets get started!
              </Button>
           </div>
  }

  startClicked () {
    this.props.startCallback();
  }

}

InitialBoard.propTypes = {
  employee: React.PropTypes.object.isRequired,
  startCallback: React.PropTypes.func
};

export default InitialBoard;
