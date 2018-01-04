import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Header, Comment } from 'semantic-ui-react'

import SinglePost from './SinglePost'
import CommentList from './CommentList'

class PostDetailView extends Component {

    render(){
        console.log('this.props',this.props)
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
    console.log("PostDetailView mapStateToProps called")
    return {
        id: ownProps.match.params.post_id,
        posts: postReducer.posts,
        comments: commentReducer.comments
    }
}

export default connect(mapStateToProps)(PostDetailView)