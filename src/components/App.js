import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import PostsList from './posts/PostsList'
import Layout from './Layout'
import AuthCallback from './AuthCallback'

import auth from '../auth'

class App extends Component {
  async componentWillMount() {
    if (this.props.location.pathname === '/callback') return

    if(auth.isAuthenticated() !== true) await auth.login()

    try {
      await auth.silentAuth()
      this.forceUpdate()
    } catch (err) {
      if (err.error === 'login_required') await auth.login()
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/callback" component={AuthCallback} />
        {auth.isAuthenticated() && (
          <Layout>
            <Route exact path="/" component={PostsList} />
          </Layout>
        )}
      </div>
    )
  }
}

export default withRouter(App)
