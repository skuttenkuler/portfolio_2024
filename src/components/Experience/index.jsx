import React from "react"
import {experience} from '../../data'

const Experience = () => {
    return (
        <div>
            <h1>Experience</h1>
            {experience.map((e, i) => {
            <div key={i} className="block">
                <img
                alt={e.title}
                src={e.thumbnail}
                className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />
              
              <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong className="font-medium">{e.title}</strong>
              
                <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              
                <p className="mt-0.5 opacity-50 sm:mt-0">{e.position}</p>
              </div>
            </div>
            })}
        </div>
    )
};

export default Experience;
