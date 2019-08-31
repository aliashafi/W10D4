import React from 'react';
import uniqueId from '../../util/unique_id';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo: "",
      id: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ id: uniqueId() });
    this.props.receiveTodo(this.state);
    this.setState({ todo: "", id: 0 });
  }

  handleChange(e){
    this.setState({todo: e.target.value});
  }

  render (){
    return(
      <div>
        <h1>Add Todo</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Todo
            <input onChange={this.handleChange} type="text" value={this.state.todo}/>
          </label>
          <input type="submit" value="submit"/>
        </form>

      </div>
    )
  }
} 

export default TodoForm;