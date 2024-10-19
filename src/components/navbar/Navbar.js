import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.png';
import User from '../../assets/user.png';
import { useLocation } from 'react-router-dom';
function Navbar() {
  let location = useLocation();  
  return (
    <>
    <div className='d-flex justify-content-between align-items-center mt-3'>
        <div><img src={Logo} className='img-fluid' alt='Cuvette' /></div>    
        <div className='d-flex gap-2'>
          <div className={styles.contact}>Contact</div>
          {location.pathname !== '/' ?
          <div>
          <div className="dropdown">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown">
            <img src={User} alt="dropdown image" className="img-responsive"/> Your Name
            <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
            <li><a href="#">Settings</a></li>
            <li><a href="#">Log Out</a></li>
            <li><a href="#">Dropdown menu 3</a></li>
        </ul>
    </div>
          </div>:""}
        </div>
         

    </div>  
    <hr style={{marginBottom:'0px'}}/> 
    </>
  )
}

export default Navbar