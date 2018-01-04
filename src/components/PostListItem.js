import React, { Component } from 'react'
import { Image, Item, Icon, Divider, Button, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { voteUpCreator, voteDownCreator, deletePost } from '../actions/post-actions'
import { Link } from 'react-router-dom'
import Timestamp from 'react-timestamp';

class PostListItem extends Component {

    voteUp = () => {
        this.props.dispatch(voteUpCreator(this.props.post))
    }

    voteDown = () => {
        this.props.dispatch(voteDownCreator(this.props.post))
    }

    handleDelete = () => {
        this.props.dispatch(deletePost(this.props.post))
    }

    render() {
        return (
            <Item.Content>
                <Item.Extra>
                    <div className='meta'>
                        By <span className='value'>{this.props.post.author}</span>
                        in category <span className='value'>{this.props.post.category}</span>
                        posted on <span className='value'><Timestamp time={new Date(this.props.post.timestamp)} format='full' /></span>
                    </div>
                </Item.Extra>
                <Item.Header>
                    <Link to={'/' + this.props.post.category + '/' + this.props.post.id}>
                        {this.props.post.title}
                    </Link>
                </Item.Header>

                <Item.Description>
                    {this.props.post.body}
                </Item.Description>
                <Item.Extra>
                    <Button as='div' labelPosition='right'>
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
                    <Button as='div' labelPosition='right'>
                        <Button icon>
                            <Icon name='comments' />
                        </Button>
                        <Label as='a' basic pointing='left'>{this.props.post.commentCount}</Label>
                    </Button>
                    <Button icon basic floated='right'>
                        <Icon name='edit' />
                    </Button>
                    <Button icon basic floated='right' onClick={this.handleDelete}>
                        <Icon name='trash' />
                    </Button>
                </Item.Extra>

                <Divider />
            </Item.Content>

        )
    }
}

export default connect()(PostListItem)
