import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.png';
import User from '../../assets/user.png';
import { useLocation, useNavigate } from 'react-router-dom';
function Navbar() {
  let location = useLocation(); 
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("name");
      localStorage.removeItem("ID");
      localStorage.removeItem("token");
      navigate('/');
  }
  return (
    <>
    <div className='d-flex justify-content-between align-items-center mt-3'>
        <div><img src={Logo} className='img-fluid' alt='Cuvette' /></div>    
        <div className='d-flex gap-2 justify-content-end align-items-center'>
          <div className={styles.contact}>Contact</div>
          {location.pathname !== '/' && location.pathname !== '/verify' && location.pathname !== '/login'?
          <div className='w-25'>
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={User} alt="dropdown image" className="w-25 rounded-circle me-3"/>{localStorage.getItem('name')}
  </button>
  <ul class="dropdown-menu">
    {/* <li><a class="dropdown-item" href="javascript:void(0)">Settings</a></li> */}
    <li><a class="dropdown-item" onClick={()=>logout()} href="javascript:void(0)">Log Out</a></li>
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