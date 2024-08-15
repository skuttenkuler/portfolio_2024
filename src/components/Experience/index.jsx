import React from "react"
import {experience} from '../../data'

const Experience = () => {
    return (
        <section className="experience" id="experience">
          <div className="container">
          {experience.map((e,i) =>(
            <div key={i} className="card">
              <a href={e.link} target="_blank">
                <img src={e.image}/>
              </a>
              <h4>{e.title}</h4>
              <div className="text">
                <p>{e.position}</p>
                <p>{e.daterange}</p>
              </div>
              </div>
                
            ))}
          </div>
        </section>
    )
};

export default Experience;
