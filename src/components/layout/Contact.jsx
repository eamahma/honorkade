import React from 'react'

function Contact() {
  return (
  <div class="form-control">
    <label className='label'>
      <span class="label-text">Full Name</span>
    </label> 
    <input type="text" placeholder="Name..." class="input input-bordered"></input>

    <label className='label'>
      <span class="label-text">Email</span>
    </label> 
    <input type="text" placeholder="info@site.com" class="input input-bordered"></input>

    <label class="label">
      <span class="label-text">Message</span>
    </label> 
    <textarea class="textarea h-24 textarea-bordered" placeholder="Message"></textarea>

  </div> 
  )
}

export default Contact

