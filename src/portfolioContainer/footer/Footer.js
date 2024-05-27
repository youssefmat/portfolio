import React from 'react'
import './Footer.css'
import shapeBg from '../../assets/home/shape-top.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <img src={shapeBg} alt='Background Shape' />
      </div>
      <div className='footer-content'>
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
        <div className='footer-bottom'>
            <p>&copy; 2024 Youssef MATHOURI. All Rights Reserved.</p>
            <button className='scroll-to-top' onClick={scrollToTop}>
                <i className='fa fa-arrow-up'></i>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Footer