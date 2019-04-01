import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import PostsList from './posts/PostsList'
import Layout from './Layout'
import AuthCallback from './AuthCallback'

import auth, { createAuthLink } from '../auth'

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_ENDPOINT,
})

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
    const authLink = createAuthLink(auth.getIdToken())

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
    })

    return (
      <div className="App">
        <Route exact path="/callback" component={AuthCallback} />
        {auth.isAuthenticated() && (
          <ApolloProvider client={client}>
            <Layout>
              <Route exact path="/" component={PostsList} />
            </Layout>
          </ApolloProvider>
        )}
      </div>
    )
  }
}

export default withRouter(App)
