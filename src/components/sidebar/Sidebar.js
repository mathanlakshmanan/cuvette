import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate();
  const openForm = ()=>{
    navigate('/home');
  }
  return (
    <div style={{borderRight: "1px solid lightgrey"}}>
      <div class="">
    <div class="">
        <div class="col-sm-auto bg-light sticky-top">
            <div class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top mt-3">
                <a href="javascript:void(0)" onClick={()=>openForm()} class="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                <i class="fa-solid fa-house" style={{fontSize: "20px"}}></i>
                </a>
            </div>
        </div>
        <div class="col-sm p-3 min-vh-100">
           
        </div>
    </div>
</div>
    </div>
  )
}

export default Sidebar