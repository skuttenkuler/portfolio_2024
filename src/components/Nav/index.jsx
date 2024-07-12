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
     <p>nav</p>
    );
};

export default Nav;