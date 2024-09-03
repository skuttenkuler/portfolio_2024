import React from "react"
import {career} from '../../data'

const Career = () => {
    return (
      <section className="career" id="career">
          <div className="container">
          {career.map((c,i) =>(
            <div key={i} className="card">
              <a  href={c.link} target="_blank">
                <img src={c.image}/>
              </a>
              <h4>{c.title}</h4>
              <div className="text">
                <p>{c.position}</p>
                <p>{c.daterange}</p>
              </div>
              </div>
                
            ))}
          </div>
        </section>
    )
};

export default Career;
