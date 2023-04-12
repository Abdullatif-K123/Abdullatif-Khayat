import React from "react";

const Button = (props) => {
  return (
    <a
      href={props.href}
      className={props.className}
      onClick={props.downloadHandler}
    >
      {props.content}
    </a>
  );
};

export default Button;
