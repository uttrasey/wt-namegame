import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

/*
 * @class Generic Component to make something selectable. When selected it fires
 * the callback passing the supplied 'item'
 * @extends React.Component
 */
class Selectable extends React.Component {

  shouldComponentUpdate () {
    return PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  /*
   * @method render
   * //TODO propogate style into this thing
   * @returns {JSX}
   */
  render () {
    return <div onClick={this.onClick.bind(this)}
                style={{'display': 'inline-block'}}>
              {this.props.content}
           </div>
  }

  /**
   * @description send the selected answer back up
   */
  onClick () {
    this.props.selectCallback(this.props.item);
  }

}

Selectable.propTypes = {
  selectCallback: React.PropTypes.func,
  item: React.PropTypes.node,
  content: React.PropTypes.element
};

export default Selectable;
