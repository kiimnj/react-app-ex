import { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import './App.css';


//함수형 컴포넌트
//Button도 컴포넌트로 불러오기
function App2() {
    let [counter, setCounter] = useState(0);
    let [name, setName] = useState("");

    console.log("");
    const onClick = () => {
        console.log("rendered~~~");
        setCounter(counter+1);
    }
    const callOnce = () => {
        console.log("call once only!!!"); //<strict />부분 없애면 한번만 작동
    }
    const onChange = (e) => {
        setName(name = e.target.value);
    }

    useEffect(callOnce, []); //생성시
    // useEffect(() => console.log("state가 변경됨"), [counter]); //state변경시
    // useEffect(() => console.log("페이지가 렌더링됨")); //ui?(페이지)가 render시
    useEffect(() => console.log("이름 변경됨"), [name, counter]);
    
    return (
        <div>
            <h1>Functional Component</h1>
            <p>{counter} Clicked</p>
            <Button text="Click!" onClick={onClick} />
            <Input onChange={onChange} />
        </div>
    );
    //input props = onChange 넘기기, input.js수정, 값 변경시 변경
}
export default App2;