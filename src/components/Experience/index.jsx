import React from "react"
import {experience} from '../../data'

const Experience = () => {
    return (
        <section className="experience">
          <div className="container">
          {experience.map((e,i) =>(
            <div className="card">
              <a key={i} href={e.link}>
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

// 	div(class=attributes.class + " cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all")
// 		div(class="absolute background bg-center bg-cover bg-" + color + "-500 bg-" + color + "-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10")
// 		div(class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20")
// 		div(class="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30")
// 			div(class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-" + color + "-500 w-10")
// 				i(class="fas fa-" + icon)
// 			div(class="content flex flex-col justify-center leading-tight text-white whitespace-pre")
// 				div(class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8")= title
// 				div(class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8")= subtitle

// div(class="antialiased bg-gradient-to-b flex flex-col font-sans from-black items-stretch justify-center h-screen p-2 to-gray-900 sm:flex-row sm:items-center")
// 	div(class="flex flex-col flex-grow items-stretch max-w-2xl min-w-md w-full sm:flex-row sm:h-72 sm:overflow-hidden")
// 		+pane("red", "walking", "Imagine", "Chase your dreams")(class="active")
// 		+pane("yellow", "apple-alt", "Build", "Realize your vision")
// 		+pane("green", "tree", "Explore", "Discover the world")
// 		+pane("blue", "tint", "Adapt", "Embrace the times")
// 		+pane("purple", "palette", "Inspire", "Share your potential")