import React, { Component } from 'react'
import { Image, Item, Icon, Divider, Button, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { voteUpCreator, voteDownCreator } from '../actions/post-actions'
import { Link } from 'react-router-dom'

class PostListItem extends Component {

    voteUp = () => {
        this.props.dispatch(voteUpCreator(this.props.post))
    }

    voteDown = () => {
        this.props.dispatch(voteDownCreator(this.props.post))
    }

    render() {
        return (
            <Item.Content>
                <Item.Header>
                    <Link to={'/'+this.props.post.category+'/'+this.props.post.id}>
                        {this.props.post.title} (Current score: {this.props.post.voteScore})
                    </Link>
                </Item.Header>
                <Item.Meta>
                    By {this.props.post.author}
                </Item.Meta>
                <Item.Description>
                    {this.props.post.body}
                </Item.Description>
                <Item.Extra>
                    Category: {this.props.post.category}
                </Item.Extra>
                <Item.Extra>
                    <Button icon basic onClick={this.voteUp}>
                        <Icon color='green' name='thumbs up' />
                    </Button>
                    <Button icon basic onClick={this.voteDown}>
                        <Icon color='red' name='thumbs down' />
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
                    <Button icon basic floated='right'>
                        <Icon name='trash' />
                    </Button>
                </Item.Extra>

                <Divider />
            </Item.Content>

        )
    }
}

export default connect()(PostListItem)
