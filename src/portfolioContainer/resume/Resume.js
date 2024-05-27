import NavbarVertical from '../navbar/vertical/NavbarVertical'
import './Resume.css'
const Resume = () => {
  return (
    <>
    <div className="resume-me-container" id='resume'>
        <h1>Resume</h1>
        <p>My formal Bio Details</p>
        <div className='line-container'>
            <div className='long-line'></div>
        </div>
    </div>
    <NavbarVertical/>
    </>
    
  )
}

export default Resume