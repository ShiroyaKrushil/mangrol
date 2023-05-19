import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button type="button" class="btn btn-primary float-end">
      <Link to={props.link}>
        {props.icon} {props.name}
      </Link>
      {props.Actionbtn}
    </button>
  );
};

export default Button;