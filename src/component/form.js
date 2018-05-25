import React, {Component} from 'react'

class Form extends Component {
	constructor(props){
		super(props);
		this.submitForm = this.submitForm.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}  
	submitForm(e){
		e.preventDefault();
		if (!this.props.text) {
			return
		}
		const newItem = {
			text : this.props.text,
			id :  Date.now()  
		}
		this.props.onSubmit(newItem)
	}

	handleChange(e){		
		const todo = e.target.value
		this.props.onChange(todo)
	}

	render(){
		return (
			<div className="row">
			<div className="col-md-12">
			<form role="form" onSubmit={this.submitForm}>
			<div className="form-group">
			<label>Todo</label>
			<input type="text" className="form-control" placeholder="Isikan Todo" onChange={this.handleChange} value={this.props.text}/>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
			</form>
			</div>	
			</div>	
			)		
		}

	}

	export default Form