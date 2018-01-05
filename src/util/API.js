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

export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
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


export const voteForComment = (commentId, option) => {
  const payload = {
    timestamp: Date.now(),
    option
  }

  return fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: headersForJSONPayload,
    body: JSON.stringify(payload)
  }).then(res => res.json())
}

export const voteForPost = (postId, option) => {
  const payload = {
    timestamp: Date.now(),
    option
  }

  return fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: headersForJSONPayload,
    body: JSON.stringify(payload)
  }).then(res => res.json())
}

export const createPost = (author, title, body, category) => {
  const payload = {
    id: uuid(),
    timestamp: Date.now(),
    title: title,
    body: body,
    author: author,
    category: category
  }

  console.log("payload", payload)

  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: headersForJSONPayload,
    body: JSON.stringify(payload)
  }).then(res => res.json())
}

export const updatePost = (postId, title, body) => {
  const payload = {
    title,
    body
  }

  return fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: headersForJSONPayload,
    body: JSON.stringify(payload)
  }).then(res => res.json())
}