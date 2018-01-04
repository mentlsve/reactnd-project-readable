import React, { Component } from 'react'
import { Comment, Icon, Button, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/comment-actions'

class SingleComment extends Component {

    handleDelete = () => {
        this.props.dispatch(deleteComment(this.props.comment))
    }

    render() {
        return (
            <Comment>
                <Comment.Content>
                    <Comment.Author as='a'>{this.props.comment.author}</Comment.Author>
                    <Comment.Metadata>
                        <div>{this.props.comment.timestamp}</div>
                    </Comment.Metadata>
                    <Comment.Metadata>
                        <div>Vote score {this.props.comment.voteScore}</div>
                    </Comment.Metadata>
                    <Comment.Text>{this.props.comment.body}</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>
                            <a>Vote up</a>
                        </Comment.Action>
                        <Comment.Action>
                            <a>Vote down</a>
                        </Comment.Action>
                        <Comment.Action>
                            <a>Edit</a>
                        </Comment.Action>
                        <Comment.Action>
                            <a onClick={this.handleDelete}>Delete</a>
                        </Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        )
    }
}

export default connect()(SingleComment)