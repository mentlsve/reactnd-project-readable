import React, { Component } from 'react';
import './App.css';
import PostList from './components/PostList'
import { Link, Route } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import CreatePost from './components/CreatePost'
import PostDetailView from './components/PostDetailView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Menu>
            <Menu.Item header>Categories</Menu.Item>
            <Menu.Item as={Link} to='/'>
              All
            </Menu.Item>
            <Menu.Item as={Link} to='/react'>
              React
            </Menu.Item>
            <Menu.Item as={Link} to='/redux'>
              Redux
            </Menu.Item>
            <Menu.Item as={Link} to='/udacity'>
              Udacity
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item as={Link} to='/create-post'>
                Create new post
            </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>

        <Route path="/" exact render={() => (
          <PostList />
        )} />

        <Route path="/udacity" exact render={() => (
          <PostList category='udacity' />
        )} />

        <Route path="/redux" exact render={() => (
          <PostList category='redux' />
        )} />

        <Route path="/react" exact render={() => (
          <PostList category='react' />
        )} />

        <Route path="/create-post" component={CreatePost} />
        <Route path="/:category/:post_id" component={PostDetailView} />

      </div>
    );
  }
}

export default App;
