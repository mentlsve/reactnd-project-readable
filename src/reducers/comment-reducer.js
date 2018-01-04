import {
    RECEIVE_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT,
    UPDATE_COMMENT
} from '../actions/comment-actions'

const initialState = {
    comments: []
}

function updateCommentInArray(comments, modifiedComment) {
    let newArray = comments.map( (comment, index) => {
        console.log(comment.id, modifiedComment.id)
        if(comment.id !== modifiedComment.id) {
            return comment;
        } else {
            return {
                ...modifiedComment
            }
        }
    });
    console.log("newArray", newArray)
    return newArray;
}

export default function commentReducer(state = initialState, action) {
    switch(action.type) {
        case RECEIVE_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: [
                    ...state.comments,
                    action.comment
                ]
            }
        case UPDATE_COMMENT:
            return {
                comments: updateCommentInArray(state.comments, action.comment)
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

