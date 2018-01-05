import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFoundPage extends Component {
    render() {
        return (
            <div>
            <h1>Page Not Found</h1>
            <p>Sorry, this page does not exist</p>
            <p><Link to='/'>Go back to posts overview</Link></p>
            </div>
        )
    }
}

export default NotFoundPage