import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  // Get from environment variables
  const EMAILJS_CONFIG = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
      console.error("EmailJS configuration missing");
      alert("Email configuration not found. Please contact the administrator.");
      return;
    }

    setLoading(true);

    // Get form values
    const templateParams = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      message: form.current.message.value,
      date: new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    console.log("Parameters sent:", templateParams); // For debug

    emailjs
      .send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setDone(true);
          setLoading(false);
          form.current.reset();
          
          setTimeout(() => {
            setDone(false);
          }, 5000);
        },
        (error) => {
          console.error("Sending error:", error.text);
          setLoading(false);
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            name="from_name" 
            className="user"  
            placeholder="Name"
            required
          />
          <input 
            type="email" 
            name="from_email" 
            className="user" 
            placeholder="Email"
            required
          />
          <textarea 
            name="message" 
            className="user" 
            placeholder="Message"
            required
          />
          <input 
            type="submit" 
            value={loading ? "Sending..." : "Send"} 
            className="button"
            disabled={loading}
          />
          <span className={`success-message ${done ? 'visible' : ''}`}>
            {done && "✅ Thank you for your message! I'll get back to you soon."}
          </span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;