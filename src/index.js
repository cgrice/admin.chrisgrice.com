import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import dotenv from 'dotenv'

import App from './components/App'
import 'normalize.css'
import './scss/main.scss'

dotenv.config()

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_ENDPOINT,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)