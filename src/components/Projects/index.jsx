import React from "react"
import {projects} from '../../data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Projects = () => {
    const slider ={
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll:1
    }
    return (
        <div className="projects">
            <h1>Projects</h1>
            <Slider {...slider}>
                {projects.map((p,i) => {
                    <div className="slide">
                        <a href={p.deployed}>
                            <img src={p.thumbnail}/>
                        </a>
                        <p>{p.title}</p>
                        <span>
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                        </span>
                        <p>{p.description}</p>
                    </div>
                })}
            </Slider>
            <p>here is the Projects</p>
        </div>
    )
};

export default Projects;
