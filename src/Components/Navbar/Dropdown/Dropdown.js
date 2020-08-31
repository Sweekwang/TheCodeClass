import React from "react";
import classes from "./Dropdown.module.css";

import DropdownDiv from "./DropdownDiv";

const Dropdown = (props)=>{
    const displayStyle = {
        "display": props.dropdownState ? "block": "none"
    };

    const topics = props.topics.map(result => {
        return(
            <DropdownDiv
                    key = {result.name}
                    topic = {result.name}
                    subtopics = {result.subitems}
                />
        )
    });

    return(
        <div className = {classes.dropdown} style = {displayStyle}>
            <div className = {classes.contentDiv}>
                {topics}
                <div className = {classes.closeButtonDiv}>
                    <button 
                        className = {classes.closeButton}
                        onClick = {props.closeButton}
                        >X</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Dropdown);

