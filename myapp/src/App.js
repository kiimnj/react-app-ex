import Button from './Button';
import Input from './Input';
// import styles from './App.css'; //styles객체로 가져오기
// import './App.css'
import './App2.css'

function App() {
  return (
    <div>
      <h1 className="h1">Hellom my react app !</h1>
      <Button text="start"/>
      <Button text="medium"/>
      <Button text="final"/>
      <Input />
    </div>
  );
}

export default App;
