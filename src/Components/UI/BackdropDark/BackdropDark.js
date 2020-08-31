import React from 'react';
import classes from './BackdropDark.module.css';

const BackdropDark = (props) => {
    const hidden = {
        display: "none"
    }

    return(
        <div className = {classes.BackdropDark} 
             style = {props.showMenu ? null : hidden}
             onClick = {props.clicked}>

        </div>
    )
}

export default BackdropDark;