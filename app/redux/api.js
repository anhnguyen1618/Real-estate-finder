import axios from 'axios'
import { schema, normalize } from 'normalizr'

import postActions from './entities/posts/actions.js'
import userActions from './entities/users/actions.js'
import * as fetchActions from './Fetching/fetching-actions.js'

const EXAMPLE_ULR = 'https://ehomemetro.herokuapp.com'

const postsSchema = new schema.Entity('posts')
const imageSchema = new schema.Entity('images', {}, { idAttribute: 'url' })
postsSchema.define({
  imageUrls: [imageSchema]
})

export const fetchPosts = (queryParams = "") => {
  return {
    type: 'HANDLE_PROMISE',
    types: [fetchActions.fetchingHouses, postActions.fetchPosts],
    api: axios.get(`${EXAMPLE_ULR}/api/search${queryParams}`)
      .then(res => {
        const { entities: { posts } } = normalize(res.data, [postsSchema])
        return posts
      })
  }
}

export const createPost = (data) => {
  return axios.post(EXAMPLE_ULR, data)
    .then(res => {
      return createPost(res)
    })
}

export const updatePost = () => {
  return axios.get(EXAMPLE_ULR)
    .then(res => {
      return updatePost(res)
    })
}

export const deletePost = () => {
  return axios.delete(EXAMPLE_ULR)
    .then(res => {
      return deletePost(res)
    })
}

export const login = (user) => {
  const { username, password } = user
  const instance = axios.create()
  instance.defaults.headers.common['Authorization'] = 'Basic ' + btoa(username + ':' + password)
  instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  instance.defaults.headers.common['withCredentials'] = true;
  return instance.post(`${EXAMPLE_ULR}/api/login`, user)
    .then(res => userActions.logIn(res.data))
}

export const signUp = (user) => {
  user.id = 1000000
  return axios.post(`${EXAMPLE_ULR}/registerUser`, user)
    .then(res => {
      return { res, type: "" }
    })
}

export const getCurrentUser = (user) => {
  return axios.get(`${EXAMPLE_ULR}/api/currentUser`)
    .then((res) => {
      console.log(res)
      return userActions.logIn(res.data)
    })
}
