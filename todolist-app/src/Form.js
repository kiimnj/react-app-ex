import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import TodoContainer from './TodoContainer';

function Form() {
    let [inputValue, setInputValue] = useState("");
    let [todoList, setTodoList] = useState([]);
  
    const onChange = (e) => {
        setInputValue(inputValue = e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setTodoList([inputValue, ...todoList]);
    }

    return (
        <form onSubmit={onSubmit} >
            <Input value={inputValue} onChange={onChange} />
            <Button />
            <hr />
            <TodoContainer list={todoList} />
        </form>
    );
  }
  
  export default Form;
  