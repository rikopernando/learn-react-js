import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'

const Main = () => (
	<main>
	<Switch>
	<Route exact path='/Home' component={Home}/>
	</Switch>
	</main>
	)

export default Main
