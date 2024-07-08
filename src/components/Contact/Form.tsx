
import React, {useState} from 'react'
import axios from 'axios'

export const ContactForm = () => {
   // const URL = process.env.NEXT_PUBLIC_SES_URL
    const [input, setInputs] = useState({   name: '', 
                                            email: '', 
                                            message: ''
    });

    const handleChange = (e) => {
        setInputs({...input, [e.target.name]: e.target.value})
    };

    async function handleSubmit(e) {
        e.preventDefault()
        
        // const data = JSON.stringify(input)
        // await axios.post(URL, data, {
        //     dataType: "json",
        //     crossDomain: "true",
        //     contentType: "application/json; charset=utf-8",
        //     data: data,
        // })
        // .then(function(response) {
        //     router.push("/success")
        //     console.log(response.statusText, response.status,response.data);
            
        //   })
        //   .catch(function(error) {
        //     console.log(error);
        // })
    }
    
        return(
            <form  onSubmit={handleSubmit} name="contact" href="/success" method="POST">
                <p>
                    <input  type="text" id="name" name="name" value={input.name} placeholder="Name.." onChange={handleChange} required/>
                </p>
                <p>
                    <input  type="text" id="email" name="email" value={input.email} placeholder="Email.." onChange={handleChange} required/>
                </p>
                <p>
                    <textarea  id="message" name="message" value={input.message} placeholder="What do you want to build?" onChange={handleChange} required></textarea>
                </p>
                <p>
                    <button>Send</button>
                </p>
            </form>
        )
    }
