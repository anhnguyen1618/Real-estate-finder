import React from 'react';
import { connect } from 'react-redux';

import FilterForm from '../Filter-bar.jsx';

import { fetchPosts } from "../../redux/api.js";
import { buildQueryParams } from "../../utils/helpers.js";

export class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Login"
    }
  }

  onSave = (user) => {
    if (this.state.activeTab === "Login") {
      return "login"
    }
    return "signup"
  }

  changeActiveTab = (activeTab) => {
    if (activeTab !== this.state.activeTab) this.setState({...this.state, activeTab });
  }

  render() {
    const { activeTab } = this.state
    return (
      <div>
		    {
		      React.cloneElement(this.props.children, { activeTab, onSubmit: this.onSave, changeActiveTab: this.changeActiveTab })
		    }
    	</div>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: options => dispatch(fetchPosts(options))
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(LoginFormContainer)
