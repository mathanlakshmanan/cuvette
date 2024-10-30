import React, { useState } from 'react'
import './Signup.module.css'
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [size, setSize] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  

  const register = async()=>{
    if(!name){
      setMsg("Name is Empty!!!");
      return 
    }
    if(!email){
      setMsg("Email is Empty!!!");
      return 
    }
    if(!phone){
      setMsg("Phone is Empty!!!");
      return 
    }
    if(!company){
      setMsg("Company is Empty!!!");
      return 
    }
    if(!size){
      setMsg("Size is Empty!!!");
      return 
    }
    if(!password){
      setMsg("Password is Empty!!!");
      return 
    }
    const url = "https://cuvette-nodeserver.onrender.com/api/v1";
    const payload = {
      name:name,
    password:password,
    phoneNo:phone,
    companyName:company,
    companyEmail:email,
    employeeSize:size,
    }

    const result = await fetch(url+"/register", {
      headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},
      method:"POST",
      body:JSON.stringify(payload)
    }).then((res)=> {return res.json()}).catch((err)=>console.log(err));
    
    setMsg(result.result.message);
    if(result.result.code === 201){
      localStorage.setItem("name", result.result.data.name);
      localStorage.setItem("ID", result.result.data.id);
      localStorage.setItem("token", result.result.data.token);
      navigate('/verify');
    }
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
          <>
          <input type='text' onChange={(e)=>setName(e.target.value)} value={name} className='form-control mb-3 name' name='name' id='name' placeholder='Name'/>
          <input type='number' onChange={(e)=>setPhone(e.target.value)} value={phone} className='form-control mb-3' name='phone' id='phone' placeholder='Phone No'/>
          <input type='text' onChange={(e)=>setCompany(e.target.value)} value={company} className='form-control mb-3' name='company' id='company' placeholder='Company Name'/>
          <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} className='form-control mb-3' name='email' id='email' placeholder='Company Email'/>
          <input type='password' onChange={(e)=>setPassword(e.target.value)} value={password} className='form-control mb-3' name='password' id='password' placeholder='Password'/>
          <input type='number' onChange={(e)=>setSize(e.target.value)} value={size} className='form-control mb-3' name='size' id='size' placeholder='Employee Size'/>
          <div className='d-flex justify-content-around text-center'>
            <div>
          <p>By clicking on proceed you wil accept our <a href="javascript:void(0)">Terms & Conditions</a></p>
          <p>Already have an account <a onClick={()=>navigate('/login')} href="javascript:void(0)">Login</a></p>
          </div>
          </div>
          <div className='row px-3'>
          <button onClick={()=>register()} className='btn btn-primary'>Proceed</button>
          </div>
          <div className='text-danger mt-3 App'>{msg}</div>
          </>
        </div>
      </div>
    </div>
  )
}

export default Signup;