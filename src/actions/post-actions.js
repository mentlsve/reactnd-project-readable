import * as API from '../util/API'

export const POSTS_LOADED = 'POSTS_LOADED'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_UP_POST = 'VOTE_UP_POST'
export const VOTE_DOWN_POST = 'VOTE_DOWN_POST'
export const COMMENT_ADDED_TO_POST = 'COMMENT_ADDED_TO_POST'
export const COMMENT_DELETED_FROM_POST = 'COMMENT_DELETED_FROM_POST'
export const CREATE_POST = 'CREATE_POST'

const deletePostActionCreator = (post) => ({
    type: DELETE_POST,
    post
})

export const deletePost = (post) => dispatch => (
    API.deletePost(post.id).then(
        post => dispatch(deletePostActionCreator(post))
    )
);

const createPostActionCreator = (post) => ({
    type: CREATE_POST,
    post
})

export const createPost = (author, title, body, category, postCreated) => dispatch => (
    API.createPost(author, title, body, category).then(
        post => {
            postCreated();
            dispatch(createPostActionCreator(post));
        }
    )
);

export const postsLoadedCreator = posts => ({
    type: POSTS_LOADED,
    posts
});

export const voteUpCreator = post => ({
    type: VOTE_UP_POST,
    post
});

export const voteDownCreator = post => ({
    type: VOTE_DOWN_POST,
    post
});