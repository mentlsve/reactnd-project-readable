import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'

class SingleComment extends Component {
    render() {
        return (
            <Comment>
                <Comment.Content>
                    <Comment.Author as='a'>{this.props.comment.author}</Comment.Author>
                    <Comment.Metadata>
                        <div>{this.props.comment.timestamp}</div>
                    </Comment.Metadata>
                    <Comment.Text>{this.props.comment.body}</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Vote up</Comment.Action>
                        <Comment.Action>Vote down</Comment.Action>
                        <Comment.Action>Edit</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        )
    }
}

export default SingleComment