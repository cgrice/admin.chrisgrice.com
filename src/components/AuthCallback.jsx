import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import auth from '../auth'

class AuthCallback extends Component {
  async componentDidMount() {
    await auth.handleAuthentication()
    this.props.history.replace('/')
  }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}

export default withRouter(AuthCallback)