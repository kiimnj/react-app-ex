import PropTypes from 'prop-types';

function Input({onChange}) {
    return (
            <input type="text" placeholder="입력하세요" onChange={onChange}></input>
    );
  }

  Input.propTypes = {
    onChange : PropTypes.func
  }
  
  export default Input;
  