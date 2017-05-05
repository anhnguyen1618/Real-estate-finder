import axios from 'axios'
import { schema, normalize } from 'normalizr'

import postActions from './entities/posts/actions.js'
import { buildOptions } from "../utils/helpers";

const EXAMPLE_ULR = 'https://ehomemetro.herokuapp.com'

const postsSchema = new schema.Entity('posts')
const imageSchema = new schema.Entity('images', {}, { idAttribute: 'url' })
postsSchema.define({
  imageUrls: [imageSchema]
})

export const fetchPosts = (queryParams = "") => {
  return axios.get(`${EXAMPLE_ULR}/api/search${queryParams}`)
    .then(res => {
      const { entities: { posts } } = normalize(res.data, [postsSchema])
      return postActions.fetchPosts(posts)
    })
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
