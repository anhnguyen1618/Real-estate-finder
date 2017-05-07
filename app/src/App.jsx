import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import MainPage from './containers/MainPage.jsx'
import Details from "./Details.jsx";

import Main from "./Main.jsx"

const App = () => {
  return (
    <Router history={browserHistory} >
        <Route path='/' component={MainPage} component={Main}>
        	<IndexRoute component={MainPage}/>
        	<Route path='/apartment/:apartmentID' component={Details} />
        </Route>
    </Router>
  )
}

export default App
