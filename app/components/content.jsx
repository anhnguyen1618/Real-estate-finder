import React from 'react';
import { connect } from 'react-redux';
import axios from "axios";

import { fetchAllPosts } from "../redux/api.js";
import { getAllPosts } from "../redux/entities/posts/selectors.js";

import Post from "./Post.jsx";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props
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
  console.log(getAllPosts(state));
  return {
    posts: getAllPosts(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchAllPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content)
