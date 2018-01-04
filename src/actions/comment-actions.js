import * as API from '../util/API'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT"
export const VOTE_UP_COMMENT = "VOTE_UP_COMMENT"
export const VOTE_DOWN_COMMENT = "VOTE_DOWN_COMMENT"
export const VOTE_UP_OPTION = "upVote"
export const VOTE_DOWN_OPTION = "downVote"

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const commentActionCreator = (type, comment) => ({
  type,
  comment
})

export const fetchComments = (postId) => dispatch => (
  API.getComments(postId).then(comments => dispatch(receiveComments(comments)))
);

export const addComment = (author, body, parentId) => dispatch => (
  API.addComment(author, body, parentId).then(
    comment => dispatch(commentActionCreator(ADD_COMMENT, comment))
  )
);

export const deleteComment = (comment) => dispatch => (
  API.deleteComment(comment.id).then(
    comment => dispatch(commentActionCreator(DELETE_COMMENT, comment))
  )
);

export const updateComment = (comment, body) => dispatch => (
  API.updateComment(comment.id, body).then(
    comment => dispatch(commentActionCreator(UPDATE_COMMENT, comment))
  )
);

export const voteUpComment = (comment) => dispatch => (
  API.voteForComment(comment.id, VOTE_UP_OPTION).then(
    comment => dispatch(commentActionCreator(VOTE_UP_COMMENT, comment))
  )
);

export const voteDownComment = (comment) => dispatch => (
  API.voteForComment(comment.id, VOTE_DOWN_OPTION).then(
    comment => dispatch(commentActionCreator(VOTE_DOWN_COMMENT, comment))
  )
)
