import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_action";

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.map(todo => {
        newState[todo.id] = todo;
      });
      return newState;
    default:
      return state;
  }
};

export default todosReducer;