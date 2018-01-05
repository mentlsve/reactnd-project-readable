import React, { Component } from 'react'
import { Item, Icon, Divider, Button, Label, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { voteUpPost, voteDownPost, updatePost, deletePost } from '../actions/post-actions'

class SinglePost extends Component {

    state = {
        editMode: false,
        body: '',
        title: ''
    }

    voteUp = () => {
        this.props.dispatch(voteUpPost(this.props.post))
    }

    voteDown = () => {
        this.props.dispatch(voteDownPost(this.props.post))
    }

    setEditMode = () => {
        this.setState({
            editMode: true,
            body: this.props.post.body,
            title: this.props.post.title
        })
    }

    cancelEdit = () => {
        this.setState({ editMode: false })
    }

    componentDidMount() {
        this.setState({
            editMode: this.props.editMode,
            body: this.props.post.body,
            title: this.props.post.title
        })
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        this.props.dispatch(updatePost(this.props.post, this.state.title, this.state.body));
        this.setState({
            editMode: false,
            body: '',
            title: ''
        })
    }

    handleDelete = () => {
        this.props.dispatch(deletePost(this.props.post))
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Extra>
                                    <div className='meta'>
                                        By <span className='value'>{this.props.post.author}</span> in category <span className='value'>{this.props.post.category}</span>
                                    </div>
                                    <Button as='div' labelPosition='right' floated='right'>
                                        <Button.Group>
                                            <Button icon onClick={this.voteDown}>
                                                <Icon color='red' name='thumbs down' />
                                            </Button>
                                            <Button icon onClick={this.voteUp}>
                                                <Icon color='green' name='thumbs up' />
                                            </Button>
                                        </Button.Group>
                                        <Label basic pointing='left'>Current score: {this.props.post.voteScore}
                                        </Label>
                                    </Button>
                                    <Button as='div' labelPosition='right' floated='right'>
                                        <Button icon>
                                            <Icon name='comments' />
                                        </Button>
                                        <Label as='a' basic pointing='left'>{this.props.post.commentCount}</Label>
                                    </Button>
                                    <Button icon basic onClick={this.setEditMode} floated='right'>
                                        <Icon name='edit' />
                                    </Button>
                                    <Button icon basic floated='right' onClick={this.handleDelete}>
                                        <Icon name='trash' />
                                    </Button>
                                </Item.Extra>
                                <Item.Header>
                                    {this.props.post.title}
                                </Item.Header>
                                <Item.Description>
                                    {this.props.post.body}
                                </Item.Description>
                                <Divider />
                            </Item.Content>
                        </Item>
                    </Item.Group>
                }
                {this.state.editMode &&
                    <Form reply onSubmit={this.handleSubmit}>
                        <Item.Content>
                            <Item.Description>
                                <Form.Input required label='Title' name='title' value={this.state.title} onChange={this.handleChange} />
                                <Form.TextArea required label='Body' value={this.state.body} name='body' onChange={this.handleChange} />
                                <Button content='Save changes' type='submit' labelPosition='left' icon='edit' primary />
                                <Button content='Cancel' labelPosition='left' icon='cancel' secondary onClick={this.cancelEdit} />
                            </Item.Description>
                            <Divider />
                        </Item.Content>
                    </Form>
                }
            </div>
        )
    }
}

export default connect()(SinglePost)
