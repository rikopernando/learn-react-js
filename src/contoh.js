import React from 'react';

export class Child extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }  
  
  handleChange(e){
    const name = e.target.value
    this.props.onChange(name)
  }
  
  render() {
    return (
      <div>
      <h1>
      Hey my name is {this.props.name}!
      </h1>
      <select id="great-names" onChange={this.handleChange}>
      <option value="Frarthur">
      Frarthur
      </option>

      <option value="Gromulus">
      Gromulus
      </option>

      <option value="Thinkpiece">
      Thinkpiece
      </option>
      </select>
      </div>
      );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this)
  }
  
  changeName(newName) {
    this.setState({
      name : newName
    })
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName}/>
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
  );


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
      <Header></Header>
      <Navbar></Navbar>
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