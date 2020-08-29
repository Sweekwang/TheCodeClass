import React, {Fragment} from "react";
import classes from "./Menu.module.css";


const menu = () => {
    return(
        <Fragment>
            <div className = {classes.menu}></div>
            <div className = {classes.menu}></div>
            <div className = {classes.menu}></div>
        </Fragment>
    )
};

export default React.memo(menu);