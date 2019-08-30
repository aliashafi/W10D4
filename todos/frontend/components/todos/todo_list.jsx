import React from 'react';

//presentational componens
export const todoList = ( {todos} ) => {
  return (
    <ul>
      {
        todos.map(todo => {
          return <li key={todo.id}> {todo.todo} </li>
        })
      }
    </ul>
    )
};

