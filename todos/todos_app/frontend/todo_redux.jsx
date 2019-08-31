import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodo, receiveTodos} from  './actions/todo_action';
import Root from './components/root';
import { fetchTodos } from './actions/todo_action'
import { allTodos } from './reducers/selectors';

let defaultTodos = {
  todos: {
    1: {
      id: 1,
      todo: 'item 1'
    },
    
    2: {
      id: 2,
      todo: 'item 2'
    }
  }
};

const Store = configureStore();
window.store = Store;
window.fetchTodos = fetchTodos;
// window.receiveTodo = receiveTodo;
// window.receiveTodos = receiveTodos;



window.allTodos = allTodos(defaultTodos);

document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={Store}/>, root);
});