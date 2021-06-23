import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
    <h1 className="heading">Mini Todo List</h1>
    <div className="todo-app">
       <TodoList />
    </div>
    </div>
  );
}

export default App;
