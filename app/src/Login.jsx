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
  const { opened } = props
  console.log(opened);
  const modalClasses = classnames('modal-login', { 'modal-opened': opened })
  return (
    <div className={modalClasses}>
    	<div className="full-screen">
		  <div className="login-modal">
		    <form className="form">
		    	<center><img src="http://www.computer-repairs-auckland.co.nz/images/home_with_wifi.png" alt=""/></center>
		    	<Field name="email" component={ControledInput}/>
		      	<Field name="password" component={ControledInput}/>
		      	<button className="pull-right loginButton">Sign in</button>
		    </form>		    
		  </div>
		</div>  	
   	</div>
  )
}

export default reduxForm({ form: 'login-form' })(Login)
