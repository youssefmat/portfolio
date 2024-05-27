import React from 'react'
 import Profile from './profile/Profile'
import { Footer } from './footer/Footer'
import './Home.css'
import AboutMe from '../aboutMe/AboutMe'
import Resume from '../resume/Resume'
import ContactMe from '../contactMe/ContactMe'
import { Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='home-container'>
          <Profile/>
          <Footer/>
      </div>
      {/* <Routes>
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes> */}
      <AboutMe />
      <Resume />
      <ContactMe />
    </>
    
  )
}

export default Home