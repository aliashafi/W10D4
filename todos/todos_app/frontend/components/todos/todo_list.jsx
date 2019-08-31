import React from 'react';
import { todoListItem, TodoListItem } from './todo_list_item';

//presentational componens
export const TodoList = ( {todos} ) => {
  return (
    <ul>
      {
        todos.map(todo => {
          return (<TodoListItem key={todo.id} todo={todo.todo}/>)
        })
      }
    </ul>
    )
};

