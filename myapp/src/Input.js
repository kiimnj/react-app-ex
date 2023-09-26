import PropTypes from 'prop-types';

function Input({onChange}) {
    return (
        <div>
            <input type="text" placeholder="입력하세요" onChange={onChange}></input>
        </div>
    );
  }

  Input.propTypes = {
    onChange : PropTypes.func
  }
  
  export default Input;
  