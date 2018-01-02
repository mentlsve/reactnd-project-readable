import React, { Component } from 'react'
import * as API from './API'
import Post from './Post'
import { Image, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'

class PostList extends Component {

    render() {
        console.log('props', this.props)
        return (
            <Item.Group>
                {this.props.posts.length > 0 && this.props.posts.map(e =>
                    <Item><Post post={e} /></Item>
                )}
            </Item.Group>
        );
    }
}

const mapStateToProps = (store) => ({
    posts: store.posts
})


export default connect(mapStateToProps)(PostList)
