import React from "react"
import {skills} from '../../data/index'

const Grid = () => {
    return(
        <ul className="skill-grid">
            {skills.map((skill,i) => 
                <li className="skill-grid-cell">
                    <img className="skill-grid-image" src={`/icons/${skill}.svg`}/>
                    <div className="skill-grid-text">{skill}</div>
                </li>
            )}
        </ul>
    )
}
const Skills = () => {
    return (
        <div className="container">
            <h3>Skills</h3>
            <Grid/>
        </div>
    )
};

export default Skills;
