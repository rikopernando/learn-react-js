import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Header } from 'semantic-ui-react'
import Form from './Form'
import axios from 'axios'

class Login extends Component {

	constructor(props){
		super(props)
		this.state = { 
			username : '' ,  
			password : '' 
		}
		this.changeUsername = this.changeUsername.bind(this)
		this.changePassword = this.changePassword.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	changeUsername(Username){
		this.setState({
			username: Username
		})
	}

	changePassword(Password){
		this.setState({
			password: Password
		})
	}

	submitForm(UserLogin){
		axios.post('/login',UserLogin)
		.then(resp => {
			console.log(resp)
			this.props.history.push('/');
		})
		.catch(err => {
			console.log(err)
		})
	}

	render() {
		return (
			<div className='login-form'>
			    {/*
			      Heads up! The styles below are necessary for the correct render of this example.
			      You can do same with CSS, the main idea is that all the elements up to the `Grid`
			      below must have a height of 100%.
			    */}
			    <style>{`
			    	body > div,
			    	body > div > div,
			    	body > div > div > div.login-form {
			    		height: 100%;
			    	}
			    	`}</style>
			    	<Grid
			    	textAlign='center'
			    	style={{ height: '100%' }}
			    	verticalAlign='middle'
			    	>

			    	<Grid.Column style={{ maxWidth: 450 }}>
			    	<Header as='h2' color='blue' textAlign='center'>
			    	Daily Programming
			    	</Header>

			    	<Form 
			    	username={this.state.username} 
			    	password={this.state.password} 
			    	onChangePassword={this.changePassword} 
			    	onChangeUsername={this.changeUsername} 
			    	onSubmit={this.submitForm}/>

			    	</Grid.Column>

			    	</Grid>
			    	</div>
			    	);
	}
}

export default Login