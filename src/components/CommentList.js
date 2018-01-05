import React, { Component } from 'react'
import SingleComment from './SingleComment'
import { Header, Comment, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchComments, addComment } from '../actions/comment-actions'

class CommentList extends Component {

    state = {
        author: '',
        body: '',
    }

    componentDidMount() {
        this.props.dispatch(fetchComments(this.props.post.id));
    }

    handleSubmit = () => {
        this.setState({ author: '', body:'' });
        this.props.dispatch(addComment(this.state.author, this.state.body, this.props.post.id ));
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        return (
            <Comment.Group>
                <Header as='h3' dividing>Comments</Header>
                {this.props.comments && this.props.comments.length > 0 && this.props.comments.map(comment =>
                    <SingleComment key={comment.id} comment={comment} />
                )}

                <Form reply onSubmit={this.handleSubmit}>
                    <Form.Input required label='Author' placeholder='Your name' name='author' value={this.state.author} onChange={this.handleChange} />
                    <Form.TextArea required value={this.state.body} name='body' onChange={this.handleChange} />
                    <Button content='Add Comment' labelPosition='left' icon='edit' type='submit' primary />
                </Form>
            </Comment.Group>
        )
    }
}

function mapStateToProps({ postReducer, commentReducer}, ownProps) {
    console.log("CommentList mapStateToProps called")
    return {
        comments: commentReducer.comments
    }
}
export default connect(mapStateToProps)(CommentList)