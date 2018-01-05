import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostListItem from './PostListItem'
import { Item, Menu } from 'semantic-ui-react'

import sortBy from 'sort-by'

const NEWEST_SORT_KEY = '-timestamp'
const AUTHOR_SORT_KEY = '-author'
const VOTE_SCORE_SORT_KEY = '-voteScore'

class PostList extends Component {

    state = {
        sortByProperty: NEWEST_SORT_KEY
    }

    handleSortClick(val) {
        this.setState({
            sortByProperty: val
        })
    }

    render() {
        let posts = []

        if (this.props.posts && this.props.posts.length > 0) {
            posts = (this.props.match && this.props.match.params && this.props.match.params.category) ? this.props.posts.filter(post => post.category === this.props.match.params.category) : this.props.posts
        }

        posts.sort(sortBy(this.state.sortByProperty));

        return (
            <div className="ui left aligned container">
                <Menu text>
                    <Menu.Item header>Sort By</Menu.Item>
                    <Menu.Item name='timestamp' active={this.state.sortByProperty === NEWEST_SORT_KEY} onClick={() => this.handleSortClick(NEWEST_SORT_KEY)} >Newest </Menu.Item>
                    <Menu.Item name='author' active={this.state.sortByProperty === AUTHOR_SORT_KEY} onClick={() => this.handleSortClick(AUTHOR_SORT_KEY)} >Author </Menu.Item>
                    <Menu.Item name='voteScore' active={this.state.sortByProperty === VOTE_SCORE_SORT_KEY} onClick={() => this.handleSortClick(VOTE_SCORE_SORT_KEY)} >Highest vote </Menu.Item>
                </Menu>
                <Item.Group>
                    {posts.map(e =>
                        <Item key={e.id}><PostListItem post={e} /></Item>
                    )}
                </Item.Group>
            </div>
        );
    }
}

const mapStateToProps = ({ postReducer, commentReducer }) => ({
    posts: postReducer.posts
})


export default connect(mapStateToProps)(PostList)
