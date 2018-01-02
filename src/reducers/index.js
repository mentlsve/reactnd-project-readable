import {
    ADD_POST,
    POSTS_LOADED
} from '../actions'

const initialState = {
    posts: {}
}

export default function addPost(state = initialState, action) {
    switch(action.type){
        case POSTS_LOADED:
            return {
                ...state,
                posts: action.posts
            }
        case "EMPTY_CART":
            return {};
        case "UPDATE_ITEMS":
            state.items = action.items;
            return state;
        default:
            return state;
    }
}