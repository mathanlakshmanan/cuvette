import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
 
  useEffect(() => {      
    if(!localStorage.getItem("name") || !localStorage.getItem("ID") || !localStorage.getItem("token")){
      navigate('/');
    }
  }, [])
  
  const openForm = ()=>{
    navigate('/jobform');
  }
  return (
    <div className='m-4'>
      <button onClick={()=>openForm()} className='btn btn-primary'>Create Interview</button>
    </div>
  )
}

export default Home