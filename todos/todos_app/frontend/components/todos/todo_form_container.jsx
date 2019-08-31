import { connect } from 'react-redux';
import TodoForm from './todo_form';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo } from '../../actions/todo_action';

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
