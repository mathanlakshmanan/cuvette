import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
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