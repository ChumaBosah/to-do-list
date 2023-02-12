import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
// import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';


function App() {
  return (
    <div className="App">
      <ToDoList  />
      
    </div>
  );
}
export default App;

