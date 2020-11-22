import React from 'react';
import emailjs from 'emailjs-com';
import "./css/Contact.css"


export default function Contact() {

    function sendEmail(e) {
      e.preventDefault();
      const errorJs = document.querySelector('.email-js-error')
      emailjs.sendForm('service_kxsy9ma', 'template_dmeexor', e.target, 'user_XiMZOd167CfBlFaRvEfg3')

        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error)
            errorJs.style.display = "block"
            setTimeout(()=>{
                errorJs.style.display = "none"
            },3000)
        });
    }

    function handleSubmit(e){
        e.preventDefault()
        const name = document.querySelector('#name-input')
        const phone = document.querySelector('#phone-input')
        const email = document.querySelector('#email-input')
        const message = document.querySelector('#message-input')
        const error = document.querySelector('.form-error')
        const success = document.querySelector('.form-success')
        
        //eslint-disable-next-line
        let phoneRegex = /^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/
        if(isEmpty(name)){
            // error name
            error.style.display = "block"
            error.innerHTML = "* Name cannot be empty."
        } else if(!phoneRegex.test(phone)){
            // error phone
            error.style.display = "block"
            error.innerHTML = "* Phone is not valid."
        } else if (isEmpty(email)){
            // error email
            error.style.display = "block"
            error.innerHTML = "* Email cannot be empty."
        } else if (isEmpty(message)){
            // error message
            error.style.display = "block"
            error.innerHTML = "* Message cannot be empty."
        } else {
            error.style.display = "none"
            // send email
            sendEmail(e)
            // clear form
            name.value = ""
            email.value = ""
            phone.value = ""
            message.value = ""
            // show success!
            success.style.display = "block"
            setTimeout(() => {
                success.style.display = "none"
            },3000)
    
        }
    }
    function isEmpty(node){
        return node.value === ""? true : false
    }
  
    return (
        <div id="contact">
            <h1>LET'S BUILD YOUR VISION</h1>
            <p>Give us a call or fill out the form, and we will get back to you promptly.</p>
            <div className="form-error">
                * Please fill out all required fields.
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input id="name-input" type="text" name="name" placeholder="Full Name" />

                <input id="email-input" type="email" name="email" placeholder="Email Address" required/>

                <input id="phone-input" type="phone" name="phone" placeholder="Phone Number" required/>

                <textarea id="message-input" name="message" placeholder="Enter your message here" />

                <input type="submit" value="SEND" />
            </form>
            <div className="form-success">
                <div className="form-success-content">
                    <h1>Thank you for getting in touch.</h1>
                    <p>We will get back to you in the following 24 hours.</p>
                </div>
            </div>
            <div className="email-js-error">
                <p>Error Sending Message - Email.js</p>
            </div>
      </div>
    );
  }