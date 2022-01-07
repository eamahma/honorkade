import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <div className='footer p-10 bg-[#D9D6D0] text-primary-content footer-center'>
      <p>Copyright &copy; {footerYear}</p> 
    </div>
  )
}

export default Footer
