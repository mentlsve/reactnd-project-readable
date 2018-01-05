import React, { Component } from 'react';
import './App.css';
import PostList from './components/PostList'
import { Link, Route, Switch } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import CreatePost from './components/CreatePost'
import PostDetailView from './components/PostDetailView'
import NotFoundPage from './components/NotFoundPage'

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

        <Switch>
          <Route path="/:category/:post_id" component={PostDetailView} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/" exact component={PostList} />
          <Route path="/not-found-page" exact component={NotFoundPage} />
          <Route path="/:category" component={PostList} />
          <Route path="**" exact component={NotFoundPage} />
        </Switch>

      </div>
    );
  }
}

export default App;
