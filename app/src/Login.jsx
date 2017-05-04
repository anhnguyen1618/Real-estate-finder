import React from 'react';
import { Field, reduxForm } from 'redux-form'
import classnames from 'classnames'

const ControledInput = (props) => {
  const { meta: { active }, input: { name, value } } = props
  const className = classnames("form-group", name, { "focused": active || value })
  return (
    <div className={className}>
		   	<input 
		   		className="form-control"
		   		{...props.input}
		   		type={name==="password"?"password":"text"}		   		
		   		/>
		</div>
  )
}

const Login = (props) => {
  const { opened, handleSubmit, activeTab, changeActiveTab } = props
  const modalClasses = classnames('modal-login', { 'modal-opened': opened })
  return (
    <div className={modalClasses}>
    	<div className="full-screen">
		  <div className="login-modal">
		  	<div className="login-tab">
		  		{['Login', 'Sign Up'].map(tab => {
		  			const tabClassNames = classnames('tab-header', { 'tab-active': tab === activeTab})
		  			return (<div className={tabClassNames} onClick={() => changeActiveTab(tab)}>{tab}</div>)
		  		})}
		  	</div>
		    <form className="form" onSubmit={handleSubmit}>
		    	<center><img src="http://www.computer-repairs-auckland.co.nz/images/home_with_wifi.png" alt=""/></center>
		    	<Field name="email" component={ControledInput}/>
		      	<Field name="password" component={ControledInput}/>
		      	<button className="pull-right loginButton" type="submit">Sign in</button>
		    </form>		    
		  </div>
		</div>  	
   	</div>
  )
}

export default reduxForm({ form: 'login-form' })(Login)
