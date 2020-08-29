import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../Logo/Logo";

const footer = () => {
    return(
        <footer className = {classes.foot}>
            <div className = {classes.btmText}>
                Evan Wes, TheCodeClass objective is to improve the learning and understanding of code for anyone.
                We use simply explaination for user to understand our concept. However, we cannot ensure that
                our contents are fully correct but we constantly check to avoid mistake. By using our site, you 
                acknowledge that you have read and understood our Cookie Policy & Privacy Policy.
            </div>

            <div className = {classes.end}>
            <Logo/> © 2020. All rights reserved.
            </div>
        </footer>
    )
};

export default footer;