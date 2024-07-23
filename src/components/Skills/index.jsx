import React from "react"
import {skills} from '../../data/index'

const Grid = () => {
    return(
        <div className="container m-auto grid grid-cols-5 gap-4 max-w-screen-lg mx-auto">
            {skills.map((skill,i) => (
                <div key={i} className="relative group overflow-hidden rounded-lg">
                    <img src={`/icons/${skill}.svg`} className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"></img>
                    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>
                </div>
            ))}
        </div>
    )
}
const Skills = () => {
    return (
        <div className="container ">
            <h3>Skills</h3>
            <Grid/>
        </div>
    )
};

export default Skills;
