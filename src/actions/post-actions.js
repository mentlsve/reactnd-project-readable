export const ADD_POST = 'ADD_POST'
export const POSTS_LOADED = 'POSTS_LOADED'
export const VOTE_UP_POST = 'VOTE_UP_POST'
export const VOTE_DOWN_POST = 'VOTE_DOWN_POST'
export const COMMENT_ADDED_TO_POST = 'COMMENT_ADDED_TO_POST'
export const COMMENT_DELETED_FROM_POST = 'COMMENT_DELETED_FROM_POST'

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