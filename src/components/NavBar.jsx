import {  signal, useSignalEffect } from '@preact/signals-react'
import React from 'react'
import { Link } from 'react-router-dom'

const scrolled = signal(false);

function NavBar() {
   
    useSignalEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            scrolled(true);
            console.log('hey')
          } else {
            scrolled(false);
          }
        };
    
        window.addEventListener('scroll', onScroll);
    
        return () => {
          window.removeEventListener('scroll', onScroll);
        };
      }, []);

  return (
    <div className=''>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container fs-4">
                <Link className="navbar-brand" to="/">George Nyanjui</Link>
                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header text-white border-bottom">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">George</h5>
                        <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar