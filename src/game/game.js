import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import request from 'request';

/*
 * @class Game
 */
class Game extends React.Component {

  constructor(options) {
    super();
    this.state = {
      employees: []
    };
  }

  /**
   * @description Load all the data and update state
   */
  componentDidMount () {
    request(this.props.url, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var employees = JSON.parse(body);
        this.setState({
          employees: employees
        });
      }
    }.bind(this));
  }

  /**
   * @description Top level render of name game application
   */
  render () {
    return <div>
            <Jumbotron>
              <h1>WillowTree Name Game</h1>
              <p>How many names can you remember?</p>
            </Jumbotron>
           </div>;
  }

}

export default Game;
