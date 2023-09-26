import { useState, useEffect } from "react";
// import reactImg  from "./react.PNG"

function Image() {
    function distroyFunc() {
        console.log("이미지 소멸됨");
    }
    function createFunc() {
        console.log("이미지 생성됨");
        distroyFunc()
    }
    useEffect(createFunc, []); //생성시
    return (
        // <img src={reactImg} />
        <img src="react.PNG" />
    )
    // const callOnce = () => {
    //     console.log("call once only!!!");
    // }
}


//함수형 컴포넌트
//Button도 컴포넌트로 불러오기
function App3() {
    let [toggle, setToggle] = useState(0);

    const onClick = () => {
        console.log("rendered~~~");
        setToggle(cur => !cur);
    }


    return (
        <div>
            <h1>Functional Component</h1>
            {toggle ? <Image /> : null}
            <button onClick={onClick}>{toggle ? "Hide" : "Show"}</button>
        </div>
    );
}
export default App3;