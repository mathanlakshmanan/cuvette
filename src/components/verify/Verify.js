import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Verify() {
    const [mobileOTP, setMobileOTP] = useState("");
    const [emailOTP, setEmailOTP] = useState("");
    const [emailVerify, setEmailVerify] = useState("");
    const [mobileVerify, setMobileVerify] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {      
      if(!localStorage.getItem("name") || !localStorage.getItem("ID") || !localStorage.getItem("token")){
        navigate('/');
      }
    }, [])

    const statusCheck = async()=>{
      const id = localStorage.getItem('ID');
      if(id){
        const statusCheck = await fetch(`https://cuvette-nodeserver.onrender.com/api/v1/otpcheck/${id}`).then((data)=>{return data.json()}).catch((error)=> console.log(error));        
      if(statusCheck?.data?.emailverify && statusCheck?.data?.mobileVerify){
        navigate('/home');
      }
      }
      
    }
    
    const verify = async(type)=>{
      
      setMsg("");
        if(type === 'email'){
          setEmailVerify("");
          if(!emailOTP){
            setMsg("Email OTP is Empty!!!");
            return 
          }
          const url = "https://cuvette-nodeserver.onrender.com/api/v1";
        const payload = {emailotp:emailOTP}
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('ID');
        const EmailResult = await fetch(url+"/email_verify/"+id, {
          headers:{'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
          method:"PUT",
          body:JSON.stringify(payload)
        }).then((res)=> {return res.json()}).catch((err)=>console.log(err));
        if(EmailResult){
          setEmailVerify(EmailResult.message);
        }
        
        }

        if(type === 'mobile'){
          setMobileVerify("");
          if(!mobileOTP){
            setMsg("Mobile OTP is Empty!!!");
            return 
          }
          const url = "https://cuvette-nodeserver.onrender.com/api/v1";
        const payload = {mobileotp:mobileOTP}
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('ID');
        const mobileResult = await fetch(url+"/mobile_verify/"+id, {
          headers:{'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
          method:"PUT",
          body:JSON.stringify(payload)
        }).then((res)=> {return res.json()}).catch((err)=>console.log(err));
        if(mobileResult){
          setMobileVerify(mobileResult.message);
        }
        
        }

        statusCheck(); 
      }
  return (
    <>
     <div className='row d-flex align-items-center'>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center p-5'>
        <p className='w-65'>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
      </div>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-5'>
        <div className='border p-5'>
          <h3 className='text-center fw-bold'>Sign Up</h3>
          <p className='text-center'>Lorem Ipsum is simply dummy text</p>
          <>
          <input type='text' className='form-control mb-3' onChange={(e)=>setEmailOTP(e.target.value)} value={emailOTP} name='email' id='email' placeholder='Email OTP'/>
          <div className='row px-3 mb-3'>
          <button onClick={()=>verify('email')} className='btn btn-primary'>Verify</button>
          <div className='App fw-bolder mt-2 text-success'>{emailVerify}</div>
          </div>
          <input type='text' className='form-control mb-3' onChange={(e)=>setMobileOTP(e.target.value)} value={mobileOTP} name='phone' id='phone' placeholder='Mobile OTP'/>
          <div className='row px-3 mb-3'>
          <button onClick={()=>verify('mobile')} className='btn btn-primary'>Verify</button>
          <div className='App fw-bolder mt-2 text-success'>{mobileVerify}</div>
          </div>
          <div className='text-danger mt-3 App'>{msg}</div>
          </>
        </div>
      </div>

    </div>

          </>
  )
}

export default Verify