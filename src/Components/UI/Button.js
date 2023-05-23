import React from "react";

import './Button.css'

const Button = (props) => {
    console.log("Button Running")
    return <button className="button" onClick={props.onClick}>{props.children}</button>
}

export default Button