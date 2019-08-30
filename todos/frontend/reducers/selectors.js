export const allTodos = (state) => {
  let todoItems = Object.values(state.todos);
  return todoItems;
};

