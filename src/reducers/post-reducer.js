import {
    ADD_POST,
    POSTS_LOADED,
    VOTE_UP_POST,
    VOTE_DOWN_POST
} from '../actions/post-actions'

import {
    RECEIVE_COMMENT
} from '../actions/comment-actions'

const initialState = {
    posts: []
}

export default function postReducer(state = initialState, action) {
    switch(action.type){
        case POSTS_LOADED:
            return {
                ...state,
                posts: action.posts
            }
        case VOTE_UP_POST:
            return {
                ...state,
                posts: [
                    ...state.posts.filter(post => post.id !== action.post.id),
                    {
                        ...action.post,
                        voteScore: action.post.voteScore + 1
                    }
                ].sort(function(a, b) {
                    console.log(a.id.localeCompare(b.id))
                    return a.id.localeCompare(b.id)
                })
            }
        case VOTE_DOWN_POST:
            return {
                ...state,
                posts: [
                    ...state.posts.filter(post => post.id !== action.post.id),
                    {
                        ...action.post,
                        voteScore: action.post.voteScore - 1
                    }
                ].sort(function(a, b) {
                    console.log(a.id.localeCompare(b.id))
                    return a.id.localeCompare(b.id)
                })
            }
        case RECEIVE_COMMENT:
            return {
                ...state,
                posts: [
                    ...state.posts.filter(post => post.id !== action.comment.parentId),
                    {
                        ...state.posts.find(post => post.id === action.comment.parentId),
                        commentCount: state.posts.find(post => post.id === action.comment.parentId).commentCount + 1
                    }
                ].sort(function(a, b) {
                    console.log(a.id.localeCompare(b.id))
                    return a.id.localeCompare(b.id)
                })
            }
        default:
            return state;
    }
}