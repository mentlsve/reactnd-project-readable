import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Header, Comment } from 'semantic-ui-react'

import SinglePost from './SinglePost'
import CommentList from './CommentList'

class PostDetail extends Component {

    render(){
        const post = this.props.posts.find(post=> post.id === this.props.id)
        return (
            <div className="ui left aligned container">
                <SinglePost post={post} />
                <CommentList comments={this.props.comments} post={post} />
            </div>
        )
    }

}

function mapStateToProps({ postReducer, commentReducer}, ownProps) {
    console.log("mapStateToProps called")
    return {
        id: ownProps.match.params.id,
        posts: postReducer.posts,
        comments: commentReducer.comments
    }
}

export default connect(mapStateToProps)(PostDetail)