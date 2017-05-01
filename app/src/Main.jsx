import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { fetchPosts } from "../redux/api.js";
import { getAllPosts } from "../redux/entities/posts/selectors.js";

import Post from "./Post.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("hihi");
    this.props.fetchPosts(this.props.location.search)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.props.fetchPosts(nextProps.location.search)
    }
  }

  render() {
    return (
      <div>
	    	{this.props.children}
	    </div>
    )
  }
}

Main.displayName = "Main"
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (queryParams) => dispatch(fetchPosts(queryParams))
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Main))
