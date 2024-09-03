import React,{useState, useEffect} from "react"

const Hero = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section className="hero parallax" id="hero">
            <div className="hero-text-container">
             <h2 id="hero-name">SAM KUTTENKULER</h2>
             <p id="hero-name-sub">Software Engineer</p>
            </div>
           <img className="hero-wave" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-wave.png?v=1"alt="bg-wave"/>
           <img className="hero-astoboy" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-spaceboy.png?v=1" alt="bg-space-dude"/>
           <img className="hero-whale" style={{rotate:`${scrollPosition/30}deg`,left:`${scrollPosition}px`,bottom:`${scrollPosition/10}px`}} src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-whale.png?v=1" alt="bg-whale"/>
           <img className="hero-moon" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-moon.png?v=1" alt="bg-moon"/>
           <img className="hero-space" src="https://sk-portfolio-pics.s3.amazonaws.com/port-hero-space.png?v=1" alt="bg-space"/>
        </section>
    )
};

export default Hero;
