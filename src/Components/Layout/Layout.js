import React, {Fragment} from 'react';

import classes from './Layout.module.css';

import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Landscape from './Landscape/Landscape';

/* When using this props, you need to ensure that in the SidebarTitle mainTitle is the same as
props.mainTitle. As this, you specify the nav bar information to be show.
*/
const Layout = (props) => {
    return(
        <Fragment>
        <Navbar pageName = {props.mainTitle} />

        <Main>
            <Landscape/>
            <div className = {classes.header}>
                <div className = {classes.headerText}>
                    <h2 className = {classes.longText}>{props.longText}</h2>
                    <h1 className = {classes.keyText}>{props.keyText}</h1>
                </div>
                <div className = {classes.headerVideo} >
                    <iframe src={props.youtubesrc} title = 'video' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen"  oallowfullscreen="oallowfullscreen"  webkitallowfullscreen="webkitallowfullscreen"></iframe>
                    <a>Download Resources</a>
                    <a>Official Reference</a>
                </div>
            </div>
            <div className = {classes.content}>
            {props.children}
            </div>
            
        </Main>
      </Fragment>
    )
}

export default React.memo(Layout);