import React from "react";
import { Link } from "react-router-dom";

const Backbutton = (props) => {
  return (
    <button type="button" class="btn btn-primary ">
      <Link to={props.link} className="">
        {props.icon} {props.name}
      </Link>
      {props.Actionbtn}
    </button>
  );
};

export default Backbutton;
