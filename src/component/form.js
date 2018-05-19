import React, {Component} from 'react'

class Form extends Component {
	render(){
		return (
			<div className="row">
			<div className="col-md-12">
			<form role="form" onSubmit={this.props.submit}>
			<div className="form-group">
			<label>Todo</label>
			<input type="text" className="form-control" placeholder="Isikan Todo" onChange={this.props.handleChange} value={this.props.text}/>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
			</form>
			</div>	
			</div>	
			)		
	}

}

export default Form