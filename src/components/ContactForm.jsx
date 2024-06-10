import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [messageError, setMessageError] = useState('');

    useEffect(() => {
        if (emailError) {
            alert(emailError);
        }
        if (nameError) {
            alert(nameError);
        }
        if (messageError) {
            alert(messageError);
        }
    }, [emailError, nameError, messageError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Resetting previous errors
        setEmailError('');
        setNameError('');
        setMessageError('');

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailRegex)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        // Validation check to make sure the boxes are filled out
        if (!name) {
            setNameError('Please fill out your name.');
            return;
        }
        if (!message) {
            setMessageError('Please fill out your message.');
            return;
        }

        // Sending the data to the backend service if there is one
        alert('Form submitted successfully');
        setSubmitStatus('Your message has been sent.');

        // Resetting form after successful submission
        setName('');
        setEmail('');
        setMessage('');
    };
    //Alerts the user in case boxes are left empty
    const handleBlur = (field) => {
        if (!document.getElementById(field).value.trim()) {
            switch (field) {
                case 'name':
                    setNameError('Please fill out your name.');
                    break;
                case 'email':
                    setEmailError('Please enter a valid email address.');
                    break;
                case 'message':
                    setMessageError('Please fill out your message.');
                    break;
                default:
                    break;
            }
        }
    };
    //Gives the properties to the form
    return (
        <form onSubmit={handleSubmit}>
            {/* Adds properties to name in form */}
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => handleBlur('name')}
                required
                className='input-field'
            />
            {nameError && <p>{nameError}</p>}
            {/* Adds properties to email in form */}
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur('email')}
                required
                className='input-field'
            />
            {emailError && <p>{emailError}</p>}
            {/* Add properties to message in form */}
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => handleBlur('message')}
                required
                className='input-message'
            />
            {messageError && <p>{messageError}</p>}

            <button className='click' type="submit">Submit</button>

            {submitStatus && <p>{submitStatus}</p>}
        </form>
    );
};

export default ContactForm;