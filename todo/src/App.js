import React from 'react';
import './App.css';
import TodoData from "./TodoData";
import TodoItem from "./TodoItem";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: TodoData
    }
    this.handleChange = this.handleChange.bind(this);
  }
  // this method is passed to everyone one of our todo items (see under render method). We get the id from the props in the TodoItem component.
  handleChange(id) {
    this.setState(prevState => {
      // the map looks through the todos array to find an id that matches with the parameter id
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          // if the todo is completed, it should now be equal to the opposite of what it currently is
          todo.completed = !todo.completed
        }
        return todo
      })
      // a brand new array (with the updated checked items) replaces the "old" array
      return {
        todos: updatedTodos
      }
    })
  }
  render() {
    const todoItems = this.state.todos.map(item => 
    <TodoItem 
      key={item.id} 
      item={item} 
      handleChange={this.handleChange}/>)
    
    // this is what acutally gets rendered to the page after we map through all of the todos (array) 
    // and each TodoItem component is created
    return (
      <div className="body">
        <div className="todo-list">
            {todoItems}
        </div>
      </div>
    )    
  }
  
}

export default App;
