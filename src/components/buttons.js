import React from "react";


function Button(props){
    return (
        <button onClick={() => props.onClick(props.value)} className={props.className}>{props.value}</button>
    );
}



export  default Button ;