import "./../style/Contact.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import nodemailer from 'nodemailer';


function Contact() {
    const form = useRef();
    // const [name, setName] = useLocalStorage("name","");
    // const [nameLS, setNameLs] = useState(window.localStorage.getItem("name"));
    // let nameLSF = null;
    // if(nameLS){
    //     setNameLs(JSON.parse(nameLS));
    //     // nameLSF = JSON.parse(nameLS);
    // }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('somesh7723', 'template_qspwg8n', form.current, {
            publicKey: 'cx-K_i6lPbWUlxozJ',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            alert("Mail Sent Successfully!");
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };
    return (
        <div id="mainContainerContact">
            <div id="preface">Got feedback? A movie you love? Or just want to say hi?</div>
            <form ref={form} onSubmit={sendEmail} id="contactForm">
                <div id="contactFormTitle">CONTACT ME</div>
                <label>Name</label>
                <input type="text" name="name" className="textInput" placeholder="John Snow" />
                <label>Email</label>
                <input type="email" name="mail" className="textInput" placeholder="johnsnowsmith@gmail.com" />
                <label>Message</label>
                <textarea name="msg" id="messageBox" placeholder="You know nothing John snow..." />
                <input type="submit" value="Send" id="contactSubmit"/>
            </form>
        </div>
        
      );
}

export default Contact;