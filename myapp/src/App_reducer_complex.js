import { useState, useReducer } from "react";
import ACTION_TYPES from "./ACTION_TYPES";
import Todo from "./Todo_reducer"

// reducer => 복잡한 state를 관리
// setter라고 생각하기
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.add :
            const newTodo = {
                id : Date.now(),
                todo : action.payload.todo,
                completed : false
            }
            return {
                count : state.count + 1,
                todoList : [...state.todoList, newTodo]
            };
        case ACTION_TYPES.del :
            return {
                count : state.count - 1,
                todoList : state.todoList.filter( todos =>
                    todos.id !== action.payload.id
                )
            };
        case ACTION_TYPES.completed :
            return {
                count : state.count,
                todoList : state.todoList.map( todos => {
                    if(todos.id === action.payload.id) {
                        return {...todos, completed : !todos.completed}
                    }
                    return todos;
                })
            };
        default:
            return state;
    }
}

const initialState = {
    count : 0,
    todoList : []
}

// dispatch => reducer에게 state 관리를 요구

// action => 요구하는 내용(우리 예제의 경우 up or down)
//           type, payload를 포함한 객체

// action의 경우 타입을 const로 등록하여 더 깔끔하게 정리
// const ACTION_TYPES 파일화

function App_reducer_complex() {
    const [todo, setTodo] = useState("");
    const [todoListInfo, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Todolist - reducer</h2>
            <p>총 todolist 수 : {todoListInfo.count}</p>
            <input type='text'
            value={todo}
            onChange={
                (e) => {setTodo(e.target.value)}
            }
            placeholder='할 일을 입력해주세요.' />
            <button onClick={() => 
                {dispatch({type : ACTION_TYPES.add, payload : {todo}})}
            }>add</button>
            {todoListInfo.todoList.map(todos => {
                return (<Todo 
                    key={todos.id}
                    todo={todos.todo}
                    dispatch={dispatch}
                    id={todos.id}
                    completed={todos.completed}
                />)
            })}
        </div>
    )
}

export default App_reducer_complex;