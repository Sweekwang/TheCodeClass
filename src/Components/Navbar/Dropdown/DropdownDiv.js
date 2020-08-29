import React from "react";

import classes from "./DropdownDiv.module.css"

const DropdownDiv = (props) => {

    const subtopics = props.subtopics.map(result => {
        return(
            <a key = {result.name} href = {result.url}> {result.name}</a>
        )
    });

    return(
        <div className = {classes.dropdownDiv}>
            <h3>{props.topic}</h3>
            {subtopics}
        </div>
    )
}

export default React.memo(DropdownDiv);