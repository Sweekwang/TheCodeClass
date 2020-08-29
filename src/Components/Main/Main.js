import React from 'react';
import classes from './Main.module.css';

import RightSideBar from './RightSideBar/RightSideBar';
import Footer from './Footer/Footer';

const MainContent = (props) => {

    return(
        <div className = {classes.mainfull}>
            <main className = "mainContent">
                <div className = {classes.content}>
                    <div className = {classes.infoContent}>
                        {props.children}
                    </div>
                </div>

                <RightSideBar/>
            </main>
            <Footer/>
        </div>
    )
};

export default MainContent;