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

axios.defaults.headers.common['withCredentials'] = true;

export const fetchPosts = (queryParams = "") => {
  return {
    type: 'HANDLE_PROMISE',
    types: [fetchActions.fetchingHouses, postActions.fetchPosts],
    api: axios.get(`${EXAMPLE_ULR}/api/public/search${queryParams}`)
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

export const updatePost = (data) => {
  delete data['imageUrls']
  return axios.post(`${EXAMPLE_ULR}/api/private/apartment`, data)
    .then(res => {
      const { entities: { posts } } = normalize(res.data, postsSchema)
      console.log(posts);
      //updatePost(posts)
      return postActions.updatePost(posts)
    })
}

export const deletePost = (id) => {
  return axios.delete(`${EXAMPLE_ULR}/api/private/apartment/${id}`)
    .then(res => {
      return postActions.deletePost(String(id))
    })
}

export const login = (user) => {
  const { username, password } = user
  const instance = axios.create()
  instance.defaults.headers.common['Authorization'] = 'Basic ' + btoa(username + ':' + password)
  instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  return instance.post(`${EXAMPLE_ULR}/api/public/login`, user)
    .then(res => userActions.logIn(res.data))
}

export const signUp = (user) => {
  user.id = 1000000
  return axios.post(`${EXAMPLE_ULR}/api/public/register`, user)
    .then(res => {
      return { res, type: "" }
    })
}

export const getCurrentUser = (user) => {
  return axios.get(`${EXAMPLE_ULR}/api/public/currentUser`)
    .then((res) => {
      if (res.data) return userActions.logIn(res.data)
      return { type: "" }
    })
}

export const sendOrder = (order) => {
  return axios.post(`${EXAMPLE_ULR}/api/private/orders`, order)
    .then((res) => {
      return { type: "" }
    })
}
