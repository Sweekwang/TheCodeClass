import React, { useState} from 'react';
import classes from './RightSideBar.module.css';

const RightSideBar = () => {
    let [fixedAds, fixedAdsState] = useState(false); 

    window.addEventListener("scroll", function() {
        const scrollAmount = window.scrollY;

        if(scrollAmount >= 900){
            fixedAdsState(true)
        } else {
            fixedAdsState(false)
        }
    });

    const fixedAdCss = {
        position: "fixed",
        top: "60px",
        height: "650px"
    };

    return(
        <aside className = {classes.sideDiv} >
            <form className = {classes.subscribe}>
                <p className = {classes.subsHeader}><b>Subscribe Now</b></p>
                <p className = {classes.subsSubtext}>Get free photos and icons assets worth ($300 ++) and get notified by the next update.</p>
                <input type="text" id="name" name="name" placeholder = "Name"/>
                <input type="email" id="email" name="email" placeholder = "Email"/>
                <input type="submit" value="Submit" className = {classes.subSumit}/>
            </form>
            <div className = {classes.ads}>
            </div>
            <div className = {classes.ads} style = {fixedAds ? fixedAdCss : null}>
            </div>
        </aside>
    )

};

export default RightSideBar;