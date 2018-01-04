import React, { Component } from 'react'
import { Comment, Icon, Button, Label, Form, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteComment, updateComment } from '../actions/comment-actions'

class SingleComment extends Component {

    state = {
        editMode: false,
        body: ''
    }

    setEditMode = () => {
        this.setState({
            editMode: true,
            body: this.props.comment.body,
        })
    }

    cancelEdit = () => {
        this.setState({ editMode: false })
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        this.props.dispatch(updateComment(this.props.comment, this.state.body));
        this.setState({
            editMode: false,
            body: ''
        })
    }

    handleDelete = () => {
        this.props.dispatch(deleteComment(this.props.comment))
    }

    render() {
        return (
            <div>
                {!this.state.editMode && <Comment>
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
                                Vote up
                            </Comment.Action>
                            <Comment.Action>
                                Vote down
                            </Comment.Action>
                            <Comment.Action onClick={this.setEditMode}>
                                Edit
                            </Comment.Action>
                            <Comment.Action onClick={this.handleDelete}>
                               Delete
                            </Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
                }
                {this.state.editMode &&
                    <Form reply onSubmit={this.handleSubmit} >
                        <Form.TextArea required label='Body' value={this.state.body} name='body' onChange={this.handleChange} />
                        <Button content='Save changes' labelPosition='left' icon='edit' primary type='submit' />
                        <Button content='Cancel' labelPosition='left' icon='cancel' secondary onClick={this.cancelEdit} />
                    </Form>
                }
            <Divider  section />
            </div>
        )
    }
}

export default connect()(SingleComment)