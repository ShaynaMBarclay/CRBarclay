import  { useState } from 'react'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
      e.preventDefault();

      emailjs.send(
        "service_60moz9q", 
        "template_90zvhpe",
        formData,
        "H61SpxzNmxG-dTJsl"
      )
      .then(() => {
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
          console.error("Error sending message:", error);
      });
  };

    const handleRedirect = () => {
    navigate("/"); 
  };

  return (
    <div className="contact-page">
      <div className="contact-info">
      <h1> Contact Us </h1>
      <p>
       <FontAwesomeIcon icon={faPhone} />   +1 240 535 4137
       </p>
      <p>
       <FontAwesomeIcon icon={faEnvelope} />  crbarclayjr@aol.com
      </p>
      </div>

      <div className="contact-form-container">
            <h3>Send us a message</h3>
            {isSent && <p className="success-message">Message sent Successfully!</p>}
            
            <form onSubmit={handleSubmit} className="contact-form">
                <label>Name:</label>
                <input
                   type="text"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   required
                   />

                   <label>Email:</label>
                   <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      />

              <label>Message:</label>
              <textarea
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 required
                 ></textarea>

            <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
