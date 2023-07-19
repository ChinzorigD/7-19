import React from "react";

const Button=(props)=>{
    return(

    <>
    <button className={props.css}>{props.text}</button>
    </>
    )
}

export default Button 