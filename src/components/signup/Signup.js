import React, { useState } from 'react'
import './Signup.module.css'
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
  const [signup, setSignup] = useState(true);
  const verify = ()=>{
    navigate('/home');
  }
  return (
    <div className='row d-flex align-items-center'>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center p-5'>
        <p className='w-65'>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
      </div>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-5'>
        <div className='border p-5'>
          <h3 className='text-center fw-bold'>Sign Up</h3>
          <p className='text-center'>Lorem Ipsum is simply dummy text</p>
          {signup ? 
          <>
          <input type='text' className='form-control mb-3 name' name='name' id='name' placeholder='Name'/>
          <input type='text' className='form-control mb-3' name='phone' id='phone' placeholder='Phone No'/>
          <input type='text' className='form-control mb-3' name='company' id='company' placeholder='Company Name'/>
          <input type='text' className='form-control mb-3' name='email' id='email' placeholder='Company Email'/>
          <input type='text' className='form-control mb-3' name='size' id='size' placeholder='Employee Size'/>
          <div className='d-flex justify-content-around text-center'>
          <p className='w-60'>By clicking on proceed you wil accept our <a href='Javascript:void(0)'>Terms</a> & <a href='Javascript:void(0)'>Conditions</a></p>
          </div>
          <div className='row px-3'>
          <button onClick={()=>setSignup(false)} className='btn btn-primary'>Proceed</button>
          </div>
          </>
          :
          <>
          <input type='text' className='form-control mb-3' name='email' id='email' placeholder='Email OTP'/>
          <div className='row px-3 mb-3'>
          <button onClick={()=>verify()} className='btn btn-primary'>Verify</button>
          </div>
          <input type='text' className='form-control mb-3' name='phone' id='phone' placeholder='Mobile OTP'/>
          <div className='row px-3 mb-3'>
          <button onClick={()=>verify()} className='btn btn-primary'>Verify</button>
          </div>
          </>
          }
        </div>
      </div>
    </div>
  )
}

export default Signup;