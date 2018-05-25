  import React from 'react'
  import { Switch, Route } from 'react-router-dom'
  import Login from '../Login/Login'

  const Router = () => (
  	<Switch>
  	<Route exact path='/' component={Login}/>
  	</Switch>
  	)

  export default Router