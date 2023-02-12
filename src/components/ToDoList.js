import React, {useState} from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function ToDoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return 
        }
        const newTodos = [todo,...todos];
        setTodos(newTodos);
         
    
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }
const removeTodo = id => {
    const removeArray = [...todos] .filter(todo => todo.id !== id)

    setTodos(removeArray); 
};


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id ===  id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
  return (
    <div>
      <h1>Things To Do Today?</h1>
      <ToDoForm onSubmit={addTodo}/>
      <ToDo todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
      />
      
    </div>
  );
}

export default ToDoList;
