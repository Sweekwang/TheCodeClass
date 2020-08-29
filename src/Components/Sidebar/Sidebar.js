import React, { useState } from 'react';
import classes from './Sidebar.module.css';

import Sidebaritem from './SidebarItem/Sidebaritem';

// Data
import SideBarTitle from '../../Data/SidebarTitle';
import NavTitle from '../../Data/NavTitle';

const Sidebar = (props) => {

    const topicChosen = SideBarTitle.filter(
        mainItems => {
            return  mainItems.mainTitle === props.mainTitle
        }
    );

    var navInfo = null;

    if (props.backText === 'Exit'){
        navInfo = NavTitle
    }
  
    

    return(
        <nav>
            <div className = {classes.sidebar} style = {props.showMenu ? { left: 0, zIndex: "1000"} : null}>
                <div className = {classes.backDiv} onClick = {props.onClickedMenu}>
                    <img src = {props.imageName} alt = "back arrow"/>
                    <p>{props.backText}</p>
                </div>
                <div className = {classes.sidebarContent}>
                    <div className = {classes.mainTitle}>
                        <p>{navInfo === null ? topicChosen[0].mainTitle : "Navigation"}</p>
                    </div>
                </div>
                <Sidebaritem
                    subTitleTexts = {topicChosen[0].subItems}
                    navInfo = {navInfo}
                />
            </div>

        </nav>
    )
};

export default React.memo(Sidebar);