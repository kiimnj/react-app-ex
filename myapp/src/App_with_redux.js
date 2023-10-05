// import { useState } from 'react';
import { createStore } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import Button from './Button_without_redux';
import './App.css';

function reducer(state, action) {
    if (action === 'changeColor'){
        return {
            ...state, color:action.payload
        }}else {
            return state;
        }
}
const initialState = {color : "yellow"};
let store = createStore(reducer, initialState);

function App_with_redux() {
  return (
    <div>
        <Provider store={store}>
            <RedContainer text="red" />
            {/* <GreenContainer setColor={setColor} style={style} /> */}
            {/* <BlueContainer setColor={setColor} style={style} /> */}
            {/* <PurpleContainer setColor={setColor} style={style} /> */}
        </Provider>
    </div>
  );
}


function RedContainer({text}) {
    const dispatch = useDispatch();
    const changedColor = useSelector(state => state.color);
    const onClick = () => {
        // props.setColor("red");
        dispatch({type:"changeColor", payload:"red"});
    };
    const style = {
        backgroundColor : changedColor
    }
    return (
        <div className='container' style={style}>
            <Button text={text} onClick={onClick} />
        </div>
    );
}

// function GreenContainer(props) {
//     // const [color, setColor] = useState("white");
//     const onClick = () => {
//         props.setColor("green");
//     };
//     return (
//         <div className='container' style={props.style}>
//             <Button text="green" onClick={onClick} />
//         </div>
//     );
// }

// function BlueContainer(props) {
//     // const [color, setColor] = useState("white");
//     const onClick = () => {
//         props.setColor("blue");
//     };
//     return (
//         <div className='container' style={props.style}>
//             <Button text="blue" onClick={onClick} />
//         </div>
//     );
// }

// function PurpleContainer(props) {
//     // const [color, setColor] = useState("white");
//     const onClick = () => {
//         props.setColor("purple");
//     };
//     return (
//         <div className='container' style={props.style}>
//             <Button text="purple" onClick={onClick} />
//         </div>
//     );
// }

export default App_with_redux;
