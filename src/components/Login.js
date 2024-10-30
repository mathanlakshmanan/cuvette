import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const login = async()=>{
      if(!email){
        setMsg("Company Email is Empty!!!");
        return 
      }
      if(!password){
        setMsg("Password is Empty!!!");
        return 
      }
      const url = "https://cuvette-nodeserver.onrender.com/api/v1";
      const payload = {
      companyEmail:email,
      password:password
      }
  
      const result = await fetch(url+"/login", {
        headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},
        method:"POST",
        body:JSON.stringify(payload)
      }).then((res)=> {return res.json()}).catch((err)=>console.log(err));
      
      setMsg(result.message);
      if(result.code === 200){
        localStorage.setItem("name", result.name);
        localStorage.setItem("ID", result.id);
        localStorage.setItem("token", result.token);
        navigate('/home');
      }
  }
  return (
    <div className='row d-flex align-items-center'>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center p-5'>
        <p className='w-65'>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
      </div>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-5'>
        <div className='border p-5'>
          <h3 className='text-center fw-bold'>Sign In</h3>
          <p className='text-center'>Lorem Ipsum is simply dummy text</p>
          <>
          <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} className='form-control mb-3' name='email' id='email' placeholder='Company Email'/>
          <input type='password' onChange={(e)=>setPassword(e.target.value)} value={password} className='form-control mb-3' name='password' id='password' placeholder='Password'/>
          <div className='d-flex justify-content-around text-center'>
          <div>
            <p>By clicking on proceed you wil accept our <a href="javascript:void(0)">Terms & Conditions</a></p>
          <p>Create an account <a onClick={()=>navigate('/')} href="javascript:void(0)">Sign Up</a></p>
          </div></div>
          <div className='row px-3'>
          <button onClick={()=>login()} className='btn btn-primary'>Log In</button>
          </div>
          <div className='text-danger mt-3 App'>{msg}</div>
          </>
        </div>
      </div>
    </div>
  )
}

export default Login