/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

let todos=['eating','washing cloths','cooking','playing bgmi'];
class Todo{  
  addTodo(item){
    todos.push(item);
    return todos;
  }
  removeTodo(item){
    todos=todos.filter(todo => todo!==item);
    return todos;
  }
  update(index,updatedTodo){
      todos[index]=updatedTodo;
      return todos;
  }
  getAll(todo){
    return todos;
  }
  deleteAll(){
    todos=[];
    return todos;
  }
}
const result=new Todo();
console.log(result.addTodo('todo'));
console.log(result.removeTodo('todo'));
console.log(result.update(0,'ahmad'));
console.log(result.getAll(todos));
console.log(todos);
console.log(result.deleteAll(todos));

module.exports = Todo;
