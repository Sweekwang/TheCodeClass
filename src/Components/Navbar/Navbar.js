import React, {useState, Fragment} from "react";

import classes from "./Navbar.module.css"

import Logo from "../Logo/Logo";
import Dropdown from "./Dropdown/Dropdown";
import Backdrop from "../UI/Backdrop/Backdrop";
import Menu from "../UI/Menu/Menu";
import Sidebar from "../Sidebar/Sidebar";

// Data
import navTitles from "../../Data/NavTitle";
import arrow from '../../Assets/Utilities/back_arrow.webp';
import exit from '../../Assets/Utilities/exit.png'

// Images
import dropdownArrow from "../../Assets/Utilities/dropdownArrow.png";


const Navbar = (props)=> {
    let [dropdown, dropdownState] = useState(false);
    let [dropSelection, dropSelectionState] = useState(0);
    let [itemSelect, itemSelectState] = useState({
        0: false,
        1: false,
        2: false, 
        3: false,
        4: false
    });
    let [deselect, deselectState] = useState(false);
    let [showMenu, showMenuState] = useState(false);

    const itemClicked = (index) => {
        if(itemSelect[index] === true){
            dropdownState(false);
            deselectState(false);
            itemSelectState({
                0: false,
                1: false,
                2: false, 
                3: false,
                4: false
            });
        } else {
            dropdownState(true);
            deselectState(true);
            dropSelectionState(index);
        
            const itemSelectUpdated = {
                0: false,
                1: false,
                2: false, 
                3: false,
                4: false
            };

            itemSelectUpdated[index] = true;

            itemSelectState(itemSelectUpdated);
        }
        
    };

    const itemHover = (index) =>{
        dropdownState(true);
        deselectState(true);
        dropSelectionState(index);
    
        const itemSelectUpdated = {
            0: false,
            1: false,
            2: false, 
            3: false,
            4: false
        };

        itemSelectUpdated[index] = true;

        itemSelectState(itemSelectUpdated);
    }

    const closeDropdown = () => {
        if(dropdown == true){
            dropdownState(false);
            deselectState(false);
            itemSelectState({
                0: false,
                1: false,
                2: false, 
                3: false,
                4: false
            });
        }
        console.log("out");

    };


    const items =  navTitles.map( (response, index) => {
            return( 
                <Fragment>
                <button onClick = {() => itemClicked(index)}
                        onMouseOver = {() => itemHover(index)}
                        className = {classes.navbarLink} 
                        key = {response.name}> {response.name} 
                        <img src = {dropdownArrow} 
                            style = {{transform: itemSelect[index] ? "rotate(0deg)" : "rotate(-90deg)" }}
                            alt = "dropdown arrow"></img>
                </button>
                </Fragment>
            )
        });

    const menuSwitch = () => {
        showMenuState(!showMenu);
        console.log(showMenu)
    }

    window.addEventListener("resize", function() {
        const widthSize = document.documentElement.clientWidth;;

        if(widthSize >= 950){
            showMenuState(false);
        } 
    });
    const toNavigaText = 'Navigation';
    const toExitText = 'Exit';
    const [backText, backState] = useState(toNavigaText);
    const [imageName, imageState] = useState(arrow);

    const clickMenu = () => {
        if (backText === toNavigaText){
            backState(toExitText);
            imageState(exit);
        } else {
            showMenuState(!showMenu);
            backState(toNavigaText);
            imageState(arrow);
        }
    }

    return(
        <nav>
            <div className = {classes.navMain}>
                <div className = {classes.navbar}>
                    <div className = {classes.manu} onClick = {menuSwitch}>
                        <Menu/>
                    </div>
                    <div className = {classes.logo}>
                        <Logo/>
                    </div>

                    {items}

                    <div className = {classes.navbarRight}>
                        <button href = "http://thecodeclass.com/" className = {classes.navbarLink}>Donation</button>
                        <button href = "http://thecodeclass.com/" className = {classes.navbarLink}>Subscription</button>
                    </div>
                </div>
                <Dropdown
                    dropdownState = {dropdown}
                    closeButton = {closeDropdown}
                    topics = {navTitles[dropSelection].subItems}
                    subtopics = {navTitles[dropSelection].subItems}
                />
                <Backdrop
                    mouserOver = {closeDropdown}
                    show = {deselect}
                />
                </div>
            <Sidebar 
                mainTitle = {props.pageName} 
                showMenu = {showMenu}
                onClickedMenu = {clickMenu}
                imageName = {imageName}
                backText = {backText}
                />
        </nav>
    )
};

export default React.memo(Navbar);