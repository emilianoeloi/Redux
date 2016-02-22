const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux 1',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux 1',
    completed: true
  };
  
  deepFreeze(todoBefore);
  
  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
  
};

testToggleTodo();
console.info("All testes passed!");