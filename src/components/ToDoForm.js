
import React,{useState, useEffect, useRef } from 'react';


function ToDoForm(props) {
    const [input, setInput] = useState('')
    const inputRef = useRef(null) 

    useEffect(() => {
      inputRef.current.focus()
    })
    const setChange = e => {
      setInput(e.target.value);
    }
    const handleSubmit = e => {
      e.preventDefault();

      props.onSubmit({
        id:Math. floor(Math.random() * 10000),
        text: input
      })
    
      setInput('')
    };
    return (
      <div>
        <form className='todo-form' onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="Things to Do" 
          value={input} 
          name="text" 
          className='todo-input'
          onChange={setChange}
          ref={inputRef}
          />
          <button className='todo-button'>Add</button>
        </form>
      </div>
    );
  }

  export default ToDoForm;