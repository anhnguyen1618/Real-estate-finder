import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { fetchPosts } from "../../redux/api.js";
import { getAllPosts } from "../../redux/entities/posts/selectors.js";
import { getFetchingByName } from "../../redux/Fetching/selectors.js";

import Post from "../components/Post.jsx";
import LoadingSpinner from '../components/Spiner.jsx'

const Content = ({ posts, housesIsLoading }) => {
  if (housesIsLoading) {
    return <LoadingSpinner/>
  }
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

const mapStateToProps = (state) => {
  console.log(state.entities.user.toJS());
  return {
    posts: getAllPosts(state),
    housesIsLoading: getFetchingByName(state, 'houses')
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
