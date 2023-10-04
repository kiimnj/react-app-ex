import { useState } from 'react';
import Button from './Button_without_redux';
import './App.css';

function App_without_redux() {
  return (
    <Parent />
  );
}

function Parent(props) { //부모의 setter로 넘긴 후 다시 뿌려서 자식들끼리 공유하는 방식
    const [color, setColor] = useState("white");
    const style = {
        backgroundColor:color
    };
    console.log("parent : ", props.setColor, props.style);
    return (
      <div>
          <RedContainer setColor={setColor} style={style} />
          <GreenContainer setColor={setColor} style={style} />
          <BlueContainer setColor={setColor} style={style} />
          <PurpleContainer setColor={setColor} style={style} />
      </div>
    );
  }

function RedContainer(props) {
    // const [color, setColor] = useState("white");
    console.log("red : ", props);
    const onClick = () => {
        props.setColor("red");
    };
    return (
        <div className='container' style={props.style}>
            <Button text="red" onClick={onClick} />
        </div>
    );
}

function GreenContainer(props) {
    // const [color, setColor] = useState("white");
    const onClick = () => {
        props.setColor("green");
    };
    return (
        <div className='container' style={props.style}>
            <Button text="green" onClick={onClick} />
        </div>
    );
}

function BlueContainer(props) {
    // const [color, setColor] = useState("white");
    const onClick = () => {
        props.setColor("blue");
    };
    return (
        <div className='container' style={props.style}>
            <Button text="blue" onClick={onClick} />
        </div>
    );
}

function PurpleContainer(props) {
    // const [color, setColor] = useState("white");
    const onClick = () => {
        props.setColor("purple");
    };
    return (
        <div className='container' style={props.style}>
            <Button text="purple" onClick={onClick} />
        </div>
    );
}

export default App_without_redux;
