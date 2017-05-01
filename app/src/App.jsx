import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import FilterForm from './containers/filter-form-container.jsx'
import Post from './Post.jsx'
import Content from "./content.jsx";
import Details from "./Details.jsx";

import Main from "./Main.jsx"

const App = () => {
  return (
    <Router history={browserHistory} >
        <Route path='/' component={FrontPage} component={Main}>
        	<IndexRoute component={FrontPage}/>
        	<Route path='/apartment/:apartmentID' component={Details} />
        </Route>
    </Router>
  )
}

const FrontPage = () => {
  return (
    <div>
	    <div className="header">
	    	<FilterForm/>
	    </div>
	    <div className="posts">
	    	<div className="container">
	    		<Content/>
	    	</div>
    	</div>
    	
   	</div>
  )
}

export default App
