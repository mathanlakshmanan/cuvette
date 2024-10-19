import React, { useState } from 'react';
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/dist/style.css';
function Form() {
  const [emails, setEmails] = useState([]);
  const [focused, setFocused] = useState(false);
  return (
    <>
    <div className='mt-4'>
     <div className="mb-3 row">
      <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
  <label for="Job" className="form-label">Job Title</label>
  </div>
  <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9'>
  <input type="email" className="form-control" id="Job" placeholder="Enter Job Title"/>
  </div>
  </div>
</div>
<div className="mb-3 row">
<div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
  <label for="Description" className="form-label">Job Description</label>
  </div>
  <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9'>
  <textarea className="form-control" placeholder='Enter Job Description' id="Description" cols="10" rows="3"></textarea>
</div>
</div>
<div className="mb-3 row">
<div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
<label for="Experience" className="form-label">Experience Level</label>
</div>
<div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9'>
<select className="form-select" aria-label="Default select" id='Experience'>
  <option selected>Select Experience Level</option>
  <option value="Junior">0-2</option>
  <option value="Associate">2-5</option>
  <option value="Mid-level">5-10</option>
  <option value="Senior">10+</option>
</select>
</div>
</div>
<div className='mb-3 row'>
<div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
  <label for="Email" className="form-label">Add Candidate</label>
  </div>
  <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9'>
  <ReactMultiEmail
        placeholder='Enter Candidate email'
        emails={emails}
        onChange={(_emails) => {
          setEmails(_emails);
        }}
        autoFocus={true}
        onFocus={() => setFocused(false)}
        onBlur={() => setFocused(false)}
        getLabel={(email, index, removeEmail) => {
          return (
            <div data-tag key={index}>
              <div data-tag-item>{email}</div>
              <span data-tag-handle onClick={() => removeEmail(index)}>
                ×
              </span>
            </div>
          );
        }}
      />
      </div>
  </div>
<div className="mb-3 row">
<div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
  <label for="Date" className="form-label">End Date</label>
  </div>
  <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9'>
  <input type="Date" className="form-control" id="Date" placeholder="Select a Date"/>
  </div>
</div>
<div className='row w-25 float-end'>
  <button className='btn btn-primary'>Send</button>
</div>

</>)
}

export default Form