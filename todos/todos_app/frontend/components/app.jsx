import React from 'react';
import TodoListContainer from "./todos/todo_list_container";
import TodoFormcontainer from './todos/todo_form_container';

const App = (props) => {
  return (
    <div>
      <TodoListContainer />
      <TodoFormcontainer />
    </div>
  );
}

export default App;