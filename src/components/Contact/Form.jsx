
import React, {useState,useEffect} from 'react'
import axios from 'axios'

export const ContactForm = () => {
    const [success,setSuccess] = useState(false);
    const [input, setInputs] = useState({   name: '', 
                                            email: '', 
                                            message: ''
    });

    const handleChange = (e) => {
        setInputs({...input, [e.target.name]: e.target.value})
    };
    useEffect(()=> {
        if(success){
            setTimeout(()=> {
                setSuccess(false)
            },3000)
        }
        return () => clearTimeout()
    },[success])

    async function handleSubmit(e) {
        e.preventDefault()
        
        const data = JSON.stringify(input)
        await axios.post(import.meta.env.VITE_SES_ENDPOINT, data, {
            dataType: "json",
            crossDomain: "true",
            contentType: "application/json; charset=utf-8",
            data: data,
        })
        .then(function() {
            console.log("hey")
            setSuccess(true)
            setInputs({name: '', email: '', message: ''})
          })
          .catch(function(error) {
            console.log(error);
        })
    }
    
        return(
            <>
            {!success ?
                <form onSubmit={handleSubmit} name="contact" href="/success" method="POST">
                <div>
                    <input  type="text" id="name" name="name" value={input.name} placeholder="Name.." onChange={handleChange} required/>
                    <span/>
                </div>
                <div>
                    <input  type="text" id="email" name="email" value={input.email} placeholder="Email.." onChange={handleChange} required/>
                    <span/>
                </div>
                <div>
                    <textarea  id="message" name="message" value={input.message} placeholder="What do you want to build?" onChange={handleChange} required></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
            :
            <div className='success-message'>
                <button onClick={setSuccess(false)}>x</button>
                <h4>Thank you!</h4>
                <p>Your message was sent.</p>
            </div>
            }
            </>
        )
    }
