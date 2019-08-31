import { connect } from 'react-redux';
import { TodoList } from './todo_list';
import { allTodos } from '../../reducers/selectors';
import {fetchTodos} from '../../actions/todo_action';

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTodos: (todo) => dispatch(fetchTodos(todo))
  };
} ;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
