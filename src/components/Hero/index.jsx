import React from "react"
const Hero = () => {
    return (
        <section className={`parallax overflow-clip`}>
           <img className="hero-wave" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-wave.png" alt="bg-wave"/>
           <img className="hero-astoboy" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-spaceboy.png" alt="bg-space-dude"/>
           <img className="hero-whale" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-whale.png" alt="bg-whale"/>
           <img className="hero-moon" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-moon.png" alt="bg-moon"/>
           <img className="hero-space" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-space.png" alt="bg-space"/>
        </section>
    )
};

export default Hero;
