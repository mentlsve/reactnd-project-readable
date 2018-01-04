import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostListItem from './PostListItem'
import { Image, Item } from 'semantic-ui-react'


class PostList extends Component {

    render() {
        console.log('props', this.props)

        let posts = []

        if(this.props.posts && this.props.posts.length > 0) {
            posts = this.props.category ? this.props.posts.filter(post => post.category === this.props.category) : this.props.posts
        }

        return (
            <div className="ui left aligned container">
            <Item.Group>
                {   posts.map(e =>
                            <Item key={e.id}><PostListItem post={e} /></Item>
                )}
            </Item.Group>
            </div>
        );
    }
}

const mapStateToProps = ({postReducer, commentReducer}) => ({
    posts: postReducer.posts
})


export default connect(mapStateToProps)(PostList)
