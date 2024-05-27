import './AboutMe.css'
import profileImage from '../../assets/home/profile.jpg'
import resume_pdf from '../../assets/documents/cv-youssefMathouri.pdf';                  
const AboutMe = () => {
  return (
    <>
    <div className="about-me-container" id='aboutme'>
        <h1>About Me</h1>
        <p>Why choose me ?</p>
        <div className='line-container'>
            <div className='long-line'></div>
        </div>
        <div className="card-container">
            <div className="card-left">
                <img src={profileImage} alt="Profile" className="profile-image" />
            </div>
            <div className="card-right">
                <p>
                Software engineer specializing in software development and website creation, 
                I am seeking a new opportunity to contribute to innovative projects.

                </p>
                <h3>Here are a Few Highlights:</h3>
                <ul className="highlights-list">
                <li>Full Stack web and mobile development</li>
                <li>Interactive Front End as per the design</li>
                <li>React and Redux Toolkit</li>
                <li>Redux for State Management</li>
                <li>Building REST API</li>
                <li>MongoDB and MySQL database</li>
                </ul>
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
        </div>
  </div>
  </>
  )
}

export default AboutMe