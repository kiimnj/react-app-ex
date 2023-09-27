import { useEffect } from "react";

function App3() {
    const getData = async () => {
        const json =  await (await fetch("http://localhost:3000/posts")).json();
        console.log(json);
    }
    // const putData = async () => {
    //     const response =  await (await fetch("http://localhost:3000/posts")).json();
    //     console.log(json);
    // }
    
    useEffect(() => getData(), []);
    


    return (
        <div>JSON Server Test</div>
    // <body>
    //     데이터 가져오기
    //     <script>
    //     function getData(){
    //         fetch("http://localhost:3000/posts")
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    //     }
    //     getData();
    //     </script>
    // </body>
    )
}
export default App3;