import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const links = [
        {
            id:"hero",
            title:"Main",
            target: "#hero"
        },
        {
            id:"experience",
            title:"Experience",
            target: "#experience"
        },
        {
            id:"skills",
            title:"Skills",
            target: "#skills"
        },
        {
            id:"projects",
            title:"Projects",
            target: "#projects"
        },
        {
            id:"contact",
            title:"Contact",
            target: "#contact"
        }
        
    ]

    return (
        <div className="nav">
            <ul className="navList">
                {links.map(link => (
                    <a key={link.id} href={link.target} className="navLink">{link.title}</a>
                ))}
            </ul>
        </div>
    
    );
};

export default Nav;