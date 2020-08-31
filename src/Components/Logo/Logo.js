import React, {Fragment} from "react";

import styled from "styled-components";
import classes from "./Logo.module.css";

const VerticalLine = styled.div`
  border-right: 3px solid #c00000;
  float: left;
  position: relative;
  height: 70%;
  top:15%;
`;


const logo = () => {
    return(
        <Fragment>
            <a href = "/about" className = {classes.logoTextMain}>Evan Wes </a>
            <VerticalLine/>
            <a href = "/" className = {classes.logoTextSub}>The Code Class</a>
        </Fragment>
    )
}

export default React.memo(logo);