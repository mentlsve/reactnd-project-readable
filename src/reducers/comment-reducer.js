import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    DELETE_COMMENT
} from '../actions/comment-actions'

const initialState = {
    comments: []
}

export default function commentReducer(state = initialState, action) {
    switch(action.type) {
        case RECEIVE_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        case RECEIVE_COMMENT:
            return {
                ...state,
                comments: [
                    ...state.comments,
                    action.comment
                ]
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.comment.id)
            }
        default:
            return state;
    }
}