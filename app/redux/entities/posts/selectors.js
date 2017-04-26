export const getAllPosts = (state) => {
  return state.entities.posts.toList().toJS()
}
