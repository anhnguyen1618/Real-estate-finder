import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { fetchPosts } from "../redux/api.js";
import { getAllPosts } from "../redux/entities/posts/selectors.js";

import Post from "./Post.jsx";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts } = this.props
    console.log(posts);
    return (
      <div className="row">
        {
          posts.map((post) => {
            return <Post key={post.id} post={post}/>
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: getAllPosts(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Content))
