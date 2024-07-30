import React from "react"
import {experience} from '../../data'

const Experience = () => {
    return (
        <section>
            {experience.map((e,i) =>(
              <a key={i} href={e.link}>
                <h4>{e.title}</h4>
                <p>{e.position}</p>
                <p>{e.daterange}</p>
              </a>
            ))}
        </section>
    )
};

export default Experience;
