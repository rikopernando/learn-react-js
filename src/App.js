import React, { Component } from 'react'
import axios from 'axios'
import Form from './component/form'
import Header from './component/header'
import Navbar from './component/navbar'

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', seconds : 0 };
    this.changeTodo = this.changeTodo.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  componentWillMount() {
    axios.get('/artikel/data')
    .then(resp => {
      console.log(resp)
      this.setState({
        items : resp.data.artikel.rows
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="wrapper">
      <Header></Header>
      <Navbar></Navbar>
      <div className="content-wrapper">
      <section className="content">
      <Form onSubmit={this.submitForm} onChange={this.changeTodo}  text={this.state.text} /><br/>
      <ul>
      {
        this.state.items.map(item => (
          <li key={item.id}>{item.jenis_bahasan}</li>
          ))
      }
      </ul>
      </section>
      </div>
      </div>
      );
  }

  changeTodo(newTodo){
    this.setState({
      text: newTodo
    })
  }

  submitForm(newItem){
    this.setState(prevState => ({
      items :  prevState.items.concat(newItem),
      text : ''
    }))

  }


}


export default TodoApp