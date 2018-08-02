import React, {Component} from 'react';
class WelcomePage extends Component {
    render() {
      return(
          <p className="text-center">Welcome {this.props.login.uname}</p>
      );
    }
}
export default WelcomePage;