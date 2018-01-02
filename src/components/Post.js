import React, { Component } from 'react'
import { Image, Item } from 'semantic-ui-react'

class Post extends Component {

    render(){
        return (
            <Item.Content>

                <Item.Header as='a'>{this.props.post.title}</Item.Header>
                <Item.Meta>
                    {this.props.post.author}
                </Item.Meta>
                <Item.Description>
                    {this.props.post.body}
                </Item.Description>
                <Item.Extra>
                    {this.props.post.category}
                </Item.Extra>
            </Item.Content>
        )
    }
}

export default Post
