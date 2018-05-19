import React, { Component } from 'react'
import axios from 'axios'
import Form from './component/form'
import Header from './component/header'
import Navbar from './component/navbar'
import Table from './component/table'

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [{
      id : 1,
      text : "Mancing"
    },{
      id : 2,
      text : "Kuliah"
    }], text: '', seconds : 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
      <Header></Header>
      <Navbar></Navbar>
      <div className="content-wrapper">
      <section className="content">
      <Form submit={this.handleSubmit} change={this.handleChange} text={this.state.text}/><br/>
      <ul>
      {
        this.state.items.map(item => (
          <li key={item.id}>{item.text}</li>
          ))
      }
      </ul>
      </section>
      </div>
      </div>
      );
  }
  handleChange(element){
    this.setState({text: element.target.value})
  }

  handleSubmit(element){
    element.preventDefault();
    if (!this.state.text.length) {
      return
    }
    const newItem = {
      text : this.state.text,
      id :  Date.now()  
    }

    this.setState(prevState => ({
      items :  prevState.items.concat(newItem),
      text : ''
    }))

  }


}


export default TodoApp