import React from "react"
import {skills} from '../../data/index'
const chunkArray = (arr,size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
}
const Grid = () => {
    const rows = chunkArray(skills,5)
    return(
        <div className="skills-container">  
        <ul className="skill-grid">
            {rows.map((row, i) => (
                <ul key={i} className={i%2 ? 'row-even' : 'row-odd'}>
                    {row.map((skill,i) => 
                        <li className="skill-grid-cell" key={i}>
                            <img className="skill-grid-image" src={`/icons/${skill}.svg`}/>
                            <div className="skill-grid-text">{skill}</div>
                        </li>
                    )}
                </ul>
            ))}
           
        </ul>
        </div>
    )
}
const Skills = () => {
    return (
        <section className="container" id="skills">
            <p className="section-title">TECHNOLOGIES</p>
            <Grid/>
        </section>
    )
};

export default Skills;
