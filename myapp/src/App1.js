import React from 'react';

//클래스 컴포넌트
class App1 extends React.Component {
    state = {
        counter : 0,
    }
    onClick = () => {
        this.setState(cur => ({counter : cur.counter + 1}));
        // this.state.counter++; //Warning : Do not mutate state directly. Use setState()
    }
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <p>{this.state.counter} Clicked</p>
                <button onClick={this.onClick}>Click !</button>
            </div>
        );
    }
}
export default App1;