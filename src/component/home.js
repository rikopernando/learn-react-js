import React, { Component } from 'react'
import Form from './form'
import Header from './header'
import Navbar from './navbar'
import Table from './table'

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
    this.changeTodo = this.changeTodo.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // componentWillMount() {
  //   axios.get('/artikel/data')
  //   .then(resp => {
  //     console.log(resp)
  //     this.setState({
  //       items : resp.data.artikel.rows
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  render() {
    return (
      <div className="wrapper">
      <div className="content-wrapper">
      <section className="content">
      <Form onSubmit={this.submitForm} onChange={this.changeTodo} text={this.state.text} /><br/>
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