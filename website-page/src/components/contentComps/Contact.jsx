import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_0ve9wkm', 
        'template_mtl88s9', 
        formData,            
        'dvhB-d3Kacj_K_y8m'      
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
          console.error(error.text);
        }
      );
  };

  return (
    <div className="emailBox">
      <p>For all queries and questions please get in touch below.</p>
      <form onSubmit={handleSubmit}>
        <div className="nameBox">
          <div className="nameText">
            <p>Name: </p>
          </div>
          <input
            className="enterName"
            type="text"
            name="name"
            placeholder="your name here..."
            value={formData.name}
            onChange={handleChange}
          />
          <div className="emailText">
            <p>Email: </p>
          </div>
          <input
            className="enterName"
            type="email"
            name="email"
            placeholder="your email here..."
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <textarea
          className="emailAdd"
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button className="sendbtn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
