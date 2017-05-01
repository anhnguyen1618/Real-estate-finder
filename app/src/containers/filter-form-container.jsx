import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import FilterForm from '../Filter-bar.jsx';

import { fetchPosts } from "../../redux/api.js";
import { buildQueryParams } from "../../utils/helpers.js";

const FilterFormContainer = (props) => {

  const submit = values => {
    props.router.push({
      query: buildQueryParams(values)
    })
  }
  return (
    <FilterForm onSubmit={submit} />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: options => dispatch(fetchPosts(options))
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(FilterFormContainer))
