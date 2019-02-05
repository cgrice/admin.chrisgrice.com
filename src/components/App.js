import React, { Component } from 'react'
import PostsList from './posts/PostsList'
import Layout from './Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <PostsList />
        </Layout>
      </div>
    );
  }
}

export default App;
