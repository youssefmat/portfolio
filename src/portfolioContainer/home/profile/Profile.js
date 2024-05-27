import { useState } from 'react'
import  './Profile.css'
import Typical from 'react-typical'
import { NavLink } from 'react-router-dom'
import { IoMenu, IoClose } from "react-icons/io5"
import resume_pdf from '../../../assets/documents/cv-youssefMathouri.pdf';

function Profile() {

        const [menuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
          setMenuOpen(!menuOpen);
        };

  return (
    <div className='profile-container'>
        <div className='navbar-container'>
            <div className='navbar-items'>
                <a className='logo-link' href='#'>MATHOURI</a>
                {/* <NavLink className={(navData) =>`nav-link ${navData.isActive ? "active":""}`} exact="true" to="/">Home</NavLink> */}
                <a className='nav-link' href="#">Home</a>
                {/* <NavLink className='nav-link'  to='/aboutme'>AboutMe</NavLink>
                <NavLink className='nav-link'  to='/resume'>Resume</NavLink>
                <NavLink className='nav-link'  to='/contactMe'>ContactMe</NavLink> */}
                <a className='nav-link' href='#aboutme'>AboutMe</a>
                <a className='nav-link' href='#resume'>Resume</a>
                <a className='nav-link' href='#contactMe'>ContactMe</a>
                <div className='menu-button' onClick={toggleMenu}>
                   {menuOpen ? <IoClose /> : <IoMenu />}
                </div>
           </div>
           {menuOpen ? <div className='menu-items'>
                <NavLink className={(navData) =>`nav-link ${navData.isActive ? "active":""}`} exact="true" to="/">Home</NavLink>
                <a className='nav-link' href='#aboutme'>AboutMe</a>
                <a className='nav-link' href='#resume'>Resume</a>
                <a className='nav-link' href='#contactMe'>ContactMe</a>
           </div>:''}
        </div>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.facebook.com/profile.php?id=100004127026823' target="_blank" rel="noopener noreferrer">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/mathouriyoussef/?hl=fr' target="_blank" rel="noopener noreferrer">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://github.com/youssefmat' target="_blank" rel="noopener noreferrer">
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/youssef-mathouri-6b02a3217/' target="_blank" rel="noopener noreferrer">
                            <i className='fa fa-linkedin'></i>
                        </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primery-text'>
                        {""}
                        Hello, I'M <span className='highlighted-text'>Youssef</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primery-text'>
                        {""}
                        <h1>
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Full Stack Developer 🌐",
                                1000,
                                "Java Spring boot  💻",
                                1000,
                                "React Js - Redux Toolkit 🎨",
                                1000,
                                "Web Services REST API 🔄",
                                1000
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                         Skill in developing applications with both front-end and back-end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href={resume_pdf} download='youssef cv.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-backround'></div>
            </div>
        </div>
    </div>
  )
}

export default Profile