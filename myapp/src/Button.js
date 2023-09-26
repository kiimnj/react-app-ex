import PropTypes from 'prop-types';
// import './Button.css';

function Button({text}, {onClick}) {
    return (
      <button className="btn" onClick={onClick} style={{backgroundColor:"indigo", color:"white"}}>
        {text}
      </button>
    );
  }
  
  Button.propTypes = {
    text : PropTypes.string,
    onClick : PropTypes.func
  }
  export default Button;
  