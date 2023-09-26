import { useState, useEffect } from 'react';
import Form from './Form.js'



function App() {
  return (
    <div>
      <h1>todolist</h1>
      {/* <Input onChange={onChange} />
      <Button onClick={onClick} /> */}
      <Form onSubmit={onSubmit}/>
      <br />
      <hr />
      <br />
      <ul>
        {/* { ? <Li /> : null} */}
      </ul>
    </div>
  );
}

export default App;
