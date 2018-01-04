import uuid from 'uuid-random';

const api = "http://localhost:3001"

// Generate an auth token
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

const headersForJSONPayload = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())

export const addComment = (author, body, parentId) => {
  const payload = {
    id: uuid(),
    timestamp: Date.now(),
    body: body,
    author: author,
    parentId: parentId
  }

  console.log("payload", payload)

  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: headersForJSONPayload,
    body: JSON.stringify(payload)
  }).then(res => res.json())
}

export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())

export const updateComment = (commentId, body) => {
  const payload = {
    timestamp: Date.now(),
    body: body
  }

  return fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: headersForJSONPayload,
    body: JSON.stringify(payload)
  }).then(res => res.json())
}