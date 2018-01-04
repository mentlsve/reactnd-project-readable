import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT
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
        default:
            return state;
    }
}