import React, { Component } from 'react';

class Staff extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome!</h1>
        <p className="lead">You have reached the authorized staff area of the portal</p>
        <h5>Name: {currentUserName}</h5>
        <h5>Email: {currentUserEmail}</h5>
      </div>
    );
  }
}

export default Staff;
