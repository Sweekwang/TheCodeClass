import React, {Fragment} from "react";

import dropdownArrow from '../../../Assets/Utilities/dropdownArrow.png';
import classes from "./Sidebaritem.module.css";

const sidebaritem = (props) => {
    var subTopicItemss = props.subTitleTexts.map(items => {
        return(
            <Fragment key = {items.topicTitle}>
            <a className = {classes.sidebaritemText} href = "www">
                <img src = {dropdownArrow} alt = "arrow img"/> {items.topicTitle}</a>
            
            <div className = {classes.subTitleTexts}>
            {items.subTopicItem.map(subTopicItem => {
                return(
                    <a href = {subTopicItem.url} key = {subTopicItem.subTitle}>{subTopicItem.subTitle}</a>
                )
            })}
            </div>

            </Fragment>
        )
    });

    const navInfo = props.navInfo;

    if(navInfo !== null){
        subTopicItemss = navInfo.map(items => {

            const subData = items.subItems.map(items => { 
                return(items.subitems.map(subsubItem => {
                    return(subsubItem)
                }))
            })


        

            return(
                <Fragment key = {items.name}>
                    <a className = {classes.sidebaritemText} href = "www">
                        <img src = {dropdownArrow} alt = "arrow img"/> {items.name}</a>

                    <div className = {classes.subTitleTexts}>
                    {subData.map(subsubArray => {
                        return(subsubArray.map( subsubItem => {
                            return(
                                <a href = {subsubItem.url} key = {subsubItem.name}>{subsubItem.name}</a>
                            )
                        }))
                    })}
                    </div>

                </Fragment>

            )
        })
    }
    
    return(
        <div className = {classes.sidebaritem}>

            
                {subTopicItemss}
            

        </div>
    )
};

export default React.memo(sidebaritem);