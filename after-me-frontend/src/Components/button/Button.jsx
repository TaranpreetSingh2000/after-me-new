import React from "react";

const Button = (props) => {
  return <button className="btn">{props.title ? props.title:"Button"}</button>;
  
};

export default Button;
