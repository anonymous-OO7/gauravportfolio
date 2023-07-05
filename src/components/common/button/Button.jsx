import React from "react";
import "../button/button.css";


const Button = (props)=> {

    const url = props.url ? props.url : "";
    const text = props.text ? props.text : ""



    return(
        <a
        href= {url}
        className="button-ctn"
      >
        {text}
      </a>
    )
}

export default Button;