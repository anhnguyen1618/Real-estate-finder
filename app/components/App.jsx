import React from 'react';

import Post from './Post.jsx'
import Content from "./content.jsx";

const App = () => {
  return (
    <div>
	    <div className="header">
	    	<div className="filter-bar">
	    		<div className="container">
	    			<h2>Filter</h2>
	    			<div className="col-md-3">
	    				<label htmlFor="">fdsaf</label>
	    				<input type="text"/>
	    			</div>
	    			<div className="col-md-3">
	    				<label htmlFor="">fdsaf</label>
	    				<input type="text"/>
	    			</div>
	    			<div className="col-md-3">
	    				<label htmlFor="">fdsaf</label>
	    				<input type="text"/>
	    			</div>
	    			<div className="col-md-3">
	    				<label htmlFor="">fdsaf</label>
	    				<input type="text"/>
	    			</div>
	    			<div className="col-md-3">
	    				<label htmlFor="">fdsaf</label>
	    				<input type="text"/>
	    			</div>
	    			<div className="col-md-3">
	    				<label htmlFor="">fdsaf</label>
	    				<input type="text"/>
	    			</div><div className="col-md-3">

	    				<label htmlFor="">fdsaf</label>
	    				<input type="text"/>
	    			</div>
	    			<div className="col-md-3">
	    				<label htmlFor="">fdsaf</label>
	    				<input type="text"/>
	    			</div>
	    		</div>
	    	</div>
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
