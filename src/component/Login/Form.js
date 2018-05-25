import React , {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Segment } from 'semantic-ui-react'

class FormLogin extends Component {

	constructor(props){
		super(props)
		this.handleChangeUsername = this.handleChangeUsername.bind(this)
		this.handleChangePassword = this.handleChangePassword.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}  

	handleChangeUsername(e){		
		const username = e.target.value
		this.props.onChangeUsername(username)
	}

	handleChangePassword(e){		
		const password = e.target.value
		this.props.onChangePassword(password)
	}

	submitForm(e){		
		e.preventDefault();
		if (!this.props.username || !this.props.password) {
			console.log("tast")
			return
		}
		const UserLogin = {
			username : this.props.username,
			password :  this.props.password
		}
		this.props.onSubmit(UserLogin)
	}

	render() {
		return (
			<Form size='large' onSubmit={this.submitForm}>
			<Segment stacked>
			<Form.Input
			fluid
			icon='user'
			iconPosition='left'
			placeholder='Username'
			onChange={this.handleChangeUsername}
			value={this.props.username}
			/>
			<Form.Input
			fluid
			icon='lock'
			iconPosition='left'
			placeholder='Password'
			type='password'
			onChange={this.handleChangePassword}
			value={this.props.password}
			/>
			<Button color='blue' fluid size='large'>Login</Button>
			</Segment>
			</Form>
			)
	}
}

export default FormLogin