import {
    CREATE_POST,
    POSTS_LOADED,
    VOTE_UP_POST,
    VOTE_DOWN_POST,
    DELETE_POST
} from '../actions/post-actions'

import {
    ADD_COMMENT,
    VOTE_UP_COMMENT,
    VOTE_DOWN_COMMENT,
    DELETE_COMMENT
} from '../actions/comment-actions'

const initialState = {
    posts: []
}

function updatePostInArray(posts, modifiedPost) {
    let newArray = posts.map((post, index) => {
        if (post.id !== modifiedPost.id) {
            return post;
        } else {
            return {
                ...modifiedPost
            }
        }
    });
    return newArray.sort(function (a, b) {
        console.log(a.id.localeCompare(b.id))
        return a.id.localeCompare(b.id)
    });
}

function insertPost(posts, post) {
    let newArray = posts.slice();
    newArray.splice(0, 0, post);
    return newArray;
}

export default function postReducer(state = initialState, action) {

    let post = {}

    switch (action.type) {
        case POSTS_LOADED:
            return {
                ...state,
                posts: action.posts
            }
        case VOTE_UP_POST:
            post = { ...state.posts.find(post => post.id === action.post.id) }
            post.voteScore = post.voteScore - 1
            return {
                ...state,
                posts: updatePostInArray(state.posts, post)
            }
        case VOTE_DOWN_POST:
            post = { ...state.posts.find(post => post.id === action.post.id) }
            post.voteScore = post.voteScore - 1
            return {
                ...state,
                posts: updatePostInArray(state.posts, post)
            }
        case ADD_COMMENT:
            post = { ...state.posts.find(post => post.id === action.comment.parentId) }
            post.commentCount = post.commentCount + 1
            return {
                ...state,
                posts: updatePostInArray(state.posts, post)
            }
        case DELETE_COMMENT:
            post = { ...state.posts.find(post => post.id === action.comment.parentId) }
            post.commentCount = post.commentCount - 1
            return {
                ...state,
                posts: updatePostInArray(state.posts, post)
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.post.id)
            }
        case CREATE_POST:
            return {
                ...state,
                posts: insertPost(state.posts, action.post)
            }
        default:
            return state;
    }
}