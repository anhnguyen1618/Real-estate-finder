import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import classnames from 'classnames'

import { fetchPosts } from "../redux/api.js";
import { getAllPosts } from "../redux/entities/posts/selectors.js";

import Post from "./Post.jsx";
import MenuButton from "./MenuButton.jsx"
import Login from "./Login.jsx"
import LoginContainer from "./containers/Login-form-container.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalShowed: false
    }
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.location.search)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.props.fetchPosts(nextProps.location.search)
    }
  }
  toggleLoginModal = () => {
    this.setState({...this.state, loginModalShowed: !this.state.loginModalShowed });
  }

  render() {
    const { loginModalShowed } = this.state
    const contentClassName = classnames('content', { 'content-opened': loginModalShowed })
    return (
      <div>
          <MenuButton handleClick={this.toggleLoginModal}/>
          <div className={contentClassName}>
            {this.props.children}
          </div>
          <LoginContainer>
            <Login opened={loginModalShowed}/>
          </LoginContainer>
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
