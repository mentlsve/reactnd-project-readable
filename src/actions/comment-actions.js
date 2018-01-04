import * as API from '../util/API'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const fetchComments = (postId) => dispatch => (
  API.getComments(postId).then(comments => dispatch(receiveComments(comments)))
);

export const addComment = (author, body, parentId) => dispatch => (
  API.addComment(author, body, parentId).then(
    comment => dispatch(receiveComment(comment))
  )
);