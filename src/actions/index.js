export const ADD_POST = 'ADD_POST'
export const POSTS_LOADED = 'POSTS_LOADED'

export const postsLoadedCreator = posts => ({
    type: POSTS_LOADED,
    posts
});