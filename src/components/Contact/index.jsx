import React from "react"
import {ContactForm} from './Form'
const Contact = (props) => {
    return (
        <section id="contact">
            <h1>Let's build something great.</h1>
            <div>
                <div>
                    <h3>Sam Kuttenkuler</h3>
                    <ul id="contact-list">
                        <a href="//www.instagram.com/kootkoot/">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="//sam-kuttenk.medium.com/">
                            <i className="fa fa-medium" aria-hidden="true"></i>
                        </a>
                        <a href="//github.com/skuttenkuler">
                            <i className="fa fa-github-square" aria-hidden="true"></i>
                        </a>
                        <a href="//www.linkedin.com/in/skuttenkuler/">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="//www.twitch.tv/kootlicious">
                            <i className="fa fa-twitch" aria-hidden="true"></i>
                        </a>
                    </ul>
                </div>
                <ContactForm/>
            </div>
        </section>
    )
};

export default Contact;
