import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import App from './components/App'
import 'normalize.css'
import './scss/main.scss'

const client = new ApolloClient({
  uri: "https://api.chrisgrice.com/graphql"
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)