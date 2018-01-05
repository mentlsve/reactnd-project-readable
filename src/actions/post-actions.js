import * as API from '../util/API'

export const POSTS_LOADED = 'POSTS_LOADED'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const VOTE_UP_POST = 'VOTE_UP_POST'
export const VOTE_DOWN_POST = 'VOTE_DOWN_POST'
export const VOTE_UP_OPTION = "upVote"
export const VOTE_DOWN_OPTION = "downVote"

// initial posts loading
export const postsLoadedCreator = posts => ({
    type: POSTS_LOADED,
    posts
});

// delete post
const deletePostActionCreator = (post) => ({
    type: DELETE_POST,
    post
})

export const deletePost = (post) => dispatch => (
    API.deletePost(post.id).then(
        post => dispatch(deletePostActionCreator(post))
    )
);

// create post
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

// update post
const updatePostActionCreator = (post) => ({
    type: UPDATE_POST,
    post
})

export const updatePost = (post, title, body) => dispatch => (
    API.updatePost(post.id, title, body).then(post => dispatch(updatePostActionCreator(post)))
)

// posts voting
export const postVoteActionCreator = (option, post) => ({
    type: option,
    post
});

export const voteUpPost = (post) => dispatch => (
    API.voteForPost(post.id, VOTE_UP_OPTION).then(
        post => dispatch(postVoteActionCreator(VOTE_UP_POST, post))
    )
);

export const voteDownPost = (post) => dispatch => (
    API.voteForPost(post.id, VOTE_DOWN_OPTION).then(
        post => dispatch(postVoteActionCreator(VOTE_DOWN_POST, post))
    )
);
