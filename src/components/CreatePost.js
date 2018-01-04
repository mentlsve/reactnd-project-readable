import React, { Component } from 'react'
import { Form, Button, Dropdown } from 'semantic-ui-react'
import { createPost } from '../actions/post-actions'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'


const CATEGORIES = [
    {
        text: 'udacity',
        value: 'udacity'
    },
    {
        text: 'react',
        value: 'react'
    },
    {
        text: 'redux',
        value: 'redux'
    },
]


class CreatePost extends Component {

    postCreated = () =>  toast.success("Post created!");

    state = {
        author: '',
        title: '',
        body: '',
        category: 'redux'
    }

    handleChange = (e, { name, value}) => this.setState({ [name]: value})

    handleSubmit = () => {
        this.props.dispatch(createPost(this.state.author, this.state.title, this.state.body, this.state.category, this.postCreated));
        this.setState({
            author: '',
            title: '',
            body: '',
            category: ''
        })
    }

    render() {
        return (
            <div className="ui left aligned container">
            <ToastContainer />
            <h2>Create a new post</h2>
                <Form reply onSubmit={this.handleSubmit} >
                    <Form.Input required label='Author' name='author' value={this.state.author} onChange={this.handleChange} />
                    <Form.Input required label='Title' name='title' value={this.state.title} onChange={this.handleChange} />
                    <Form.Select required label='Category' name='category' value={this.state.category} options={CATEGORIES} onChange={this.handleChange} />
                    <Form.TextArea required label='Body' value={this.state.body} name='body' onChange={this.handleChange} />
                    <Button content='Submit post' labelPosition='left' icon='edit' primary type='submit' />
                </Form>
            </div>
        )
    }
}

export default connect()(CreatePost)