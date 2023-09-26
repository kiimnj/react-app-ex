import PropTypes from 'prop-types';
import Input from './Input.js';
import Button from './Button.js';

function Form({onChange}) {
    let [name, setName] = useState("");
  
    const onClick = () => {
      
    }
    const callOnce = () => {
        console.log("call once only!!!");
    }
    const onChange = (e) => {
        setName(name = e.target.value);
    }
    const onSubmit = (e) => {
  
    }
    return (
        <form>
            <input type="text" placeholder="할 일" onChange={onChange}></input>
            <button type='submit'>추가</button>
        </form>
    );
  }

  Form.propTypes = {
    onChange : PropTypes.func
  }
  
  export default Form;
  