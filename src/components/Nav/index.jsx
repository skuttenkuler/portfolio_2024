import React, { useState } from "react";
const Nav = () => {
    const links = [
        {
            id:"hero",
            title:"Home",
            target: "#hero"
        },
        {
            id:"career",
            title:"Career",
            target: "#career"
        },
        {
            id:"skills",
            title:"Skills",
            target: "#skills"
        },
        {
            id:"contact",
            title:"Contact",
            target: "#contact"
        }
        
    ]
    const [active,setActive] = useState(0)
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleSetActive = (index) => {
        setActive(index !== active ? index : active);
        if(toggleMenu){
            setToggleMenu(index !== active ? false : true)
        }
        
    }

    return (
        <div id="nav" className="nav">
            <ul className={`navList ${toggleMenu ? 'open':''}`}>
                {links.map((link,i) => (
                <div key={i}>
                    <a href={link.target} className={i === active ? 'navlink active': 'navLink'} onClick={() => handleSetActive(i)}>{link.title}</a>
                    <span className={`underline ${i === active ? 'expand' : ''}`}></span>
                </div>
                ))}
            </ul>
            <div className={`mobile-nav ${toggleMenu && 'hide'}`} onClick={() => setToggleMenu(true)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    
    );
};

export default Nav;