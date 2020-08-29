import React from "react";

import classes from "./Backdrop.module.css";

const backdrop = (props) => {
    console.log(props.show);

    return(
        <div 
            className = {classes.backdrop} 
            onMouseOver = {props.mouserOver}
            style = {{display: props.show ? "block" : "none"}}
            >

        </div>
    )
};

export default React.memo(backdrop);