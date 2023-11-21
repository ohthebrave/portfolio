import React from 'react';
import me from '../assets/me.jpeg';
import cap from '../assets/graduation-cap.jpeg';
import code from '../assets/code.avif';
import closed from '../assets/closed.avif';
import Footer from './Footer';
import NavBar from './NavBar';


function About() {
  return (
    <div className="container">
      <NavBar/>
      <div className='row'>
        <div className='col-md-6 mt-4'>
          <img src={me} alt="picture of George" />
        </div>
        <div className='col-md-6 text-white text-center mt-4 pt-5'>
          <h2>About me</h2>
          <p className='fw-lighter'>
          Fun fact: I'm both a Software Engineer and a GIS Enthusiast.
          My goal is to develop solutions that add value and improve 
          business processes in both frontend and backend. I'm skilled 
          in Javascript, web, and desktop development, React, Python, 
          and GIS development. Currently, I'm working as a freelancer, 
          helping different product teams to build enjoyable user experiences. 
          I also love volunteering in open-source projects for social good.
          </p>
          <a href="https://docs.google.com/document/d/19X1XKtDmnGPSRIoN9aP4Y0RMRpK2nXi5BlMaryjWQ9Y/edit?usp=sharing" className="btn btn-outline-secondary mt-4">My Resume</a>
        </div>
        <div className='col-md-6 text-white pt-5'>
          <h3 className='pt-lg-5'>Qualifications</h3>
          <ul className='fw-lighter pt-lg-3'>
            <li className='mb-3'>Certificate in Software Engineering, Moringa School.</li>
            <li>Bachelor's degree in Land Resource and Management(Remote Sensing and GIS), JKUAT.</li>
          </ul>
          <a href="https://docs.google.com/document/d/19X1XKtDmnGPSRIoN9aP4Y0RMRpK2nXi5BlMaryjWQ9Y/edit?usp=sharing" className="btn btn-outline-secondary mt-4 mx-5">My Resume</a>
        </div>
        <div className='col-md-6'>
          <img src={cap} alt="graduation-cap" />
        </div>
        <div className='col-md-6'>
          <img src={code} alt="image of script" />
        </div>
        <div className='col-md-6 text-white pt-lg-5 mb-lg-2'>
          <h2>Skills</h2>
          <ul className='fw-lighter pt-lg-3'>
            <li>Javascript</li>
            <li>React</li>
            <li>Python</li>
            <li>GIS Web Applications</li>
            <li>Typescript</li>
          </ul>
        </div>
        <div className="col-md-6 text-white mb-3">
          <h2 className='pt-md-5'>What I do when I'm not working</h2>
          <p className='p-md-4 fst-italic'>If you can't find me on my computer, I will either be;</p>
          <ul className='fw-lighter'>
            <li>Cooking</li>
            <li>Playing Rugby</li>
            <li>Watching Football</li>
            <li>Listening to Music</li>
          </ul>
        </div>
        <div className='col-md-6 mb-3'>
          <img className='img-lap' src={closed} alt="laptop" />
          <p className='text-end mb-3'>All work and no play makes Jack a dull boy.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About