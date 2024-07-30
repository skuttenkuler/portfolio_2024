import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const links = [
        {
            id:"hero",
            title:"Main"
        },
        {
            id:"experience",
            title:"Experience"
        },
        {
            id:"skills",
            title:"Skills"
        },
        {
            id:"portfolio",
            title:"Portfolio"
        },
        {
            id:"projects",
            title:"Projects"
        },
        {
            id:"contact",
            title:"Contact"
        }
        
    ]

    return (
        <div className="nav">
            <ul className="navList">
                {links.map(link => (
                    <li key={link.id} href={`#${link.id}`} className="navLink">{link.title}</li>
                ))}
            </ul>
        </div>
    
    );
};

export default Nav;