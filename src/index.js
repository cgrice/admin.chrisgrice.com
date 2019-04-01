import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import dotenv from 'dotenv'

import App from './components/App'
import 'normalize.css'
import './scss/main.scss'

dotenv.config()

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)