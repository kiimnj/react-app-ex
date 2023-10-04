import { useState } from 'react';
import Button from './Button_without_redux';
import './App.css';

function App_without_redux() {
  return (
    <div>
        <RedContainer />
        <GreenContainer />
        <BlueContainer />
        <PurpleContainer />
    </div>
  );
}

function RedContainer() {
    const [color, setColor] = useState("white");
    const onClick = () => {
        setColor("red");
    };
    return (
        <div className='container'>
            <Button text="red" onClick={onClick} style={{backgroundColor:color}} />
        </div>
    );
}

function GreenContainer() {
    const [color, setColor] = useState("white");
    const onClick = () => {
        setColor("green");
    };
    return (
        <div className='container'>
            <Button text="green" onClick={onClick} style={{backgroundColor:color}} />
        </div>
    );
}

function BlueContainer() {
    const [color, setColor] = useState("white");
    const onClick = () => {
        setColor("blue");
    };
    return (
        <div className='container'>
            <Button text="blue" onClick={onClick} style={{backgroundColor:color}} />
        </div>
    );
}

function PurpleContainer() {
    const [color, setColor] = useState("white");
    const onClick = () => {
        setColor("purple");
    };
    return (
        <div className='container'>
            <Button text="purple" onClick={onClick} style={{backgroundColor:color}} />
        </div>
    );
}

export default App_without_redux;
