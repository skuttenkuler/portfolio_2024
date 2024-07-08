import React from "react"

const Hero: React.FunctionComponent = (props) => {
    return (
        <section className="parallax">
           <img className="hero-wave" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-wave.png" alt="bg-wave"/>
           <img className="hero-astoboy" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-spaceboy.png" alt="bg-space-dude"/>
           <img className="hero-moon" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-moon.png" alt="bg-moon"/>
           <img className="hero-space" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-space.png" alt="bg-space"/>
        </section>
    )
};

export default Hero;
