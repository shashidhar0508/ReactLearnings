import React from "react";
import { Link } from "react-router-dom";

const button = {
    backgroundColor:'orange';
    padding:10,
    color:'black',
    borderRadius:10,
    borderColor:'black',
    borderwidth:2,
    borderStyke:'solid'
}
const Button = (props) => {
  return (
    <Link to={props.link}>
      <span style={button}>{props.name}</span>
    </Link>
  );
};
export default Button;
