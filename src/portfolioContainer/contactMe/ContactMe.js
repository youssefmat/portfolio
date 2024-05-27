import { useState } from 'react';
import './ContactMe.css';
import loadingImage from '../../assets/home/load2.gif';
import backgroundImage from '../../assets/home/mailz.jpeg';
import  './ContactMe.css'
import Footer from '../footer/Footer';

const ContactMe = () => {

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission process
    setTimeout(() => {
      setIsLoading(false);
      alert('Message sent!');
    }, 2000);
  };
  return (
    <>
    <div className="about-me-container" id='contactMe'>
        <h1>Contact Me</h1>
        <p>Lits Keep In Touch</p>
        <div className='line-container'>
            <div className='long-line'></div>
        </div>
        <div className="contact-form-container">
          <div className="contact-info">
            <h2>Get In Touch 📧</h2>
            <div className="social-icons">
              <a href='https://www.facebook.com/profile.php?id=100004127026823' target="_blank" rel="noopener noreferrer">
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='https://github.com/youssefmat' target="_blank" rel="noopener noreferrer">
                <i className='fa fa-github'></i>
              </a>
              <a href='https://www.instagram.com/mathouriyoussef/?hl=fr' target="_blank" rel="noopener noreferrer">
                <i className='fa fa-instagram'></i>
              </a>
              <a href='https://www.linkedin.com/in/youssef-mathouri-6b02a3217/' target="_blank" rel="noopener noreferrer">
              <i className='fa fa-linkedin'></i>
              </a>
            </div>
            <p>Send Your Email Here!</p>
            <img src={backgroundImage} alt="background" className="background-image" />
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit">send <i className="fa fa-paper-plane"></i>{isLoading && <img src={loadingImage} alt="Loading..." className="loading-image" />}</button>
            
          </form>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ContactMe