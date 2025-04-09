import React from 'react'


const bannner = () => {
  return (
    <div className='banner-sec'>
      <div className='banner-con'>
        <div className='box'>
          <h1>Netflix</h1>
          

          </div>
          <div className='sec'>
            <h1>Unlimited movies, TV shows and more</h1>
            <h3>Starts at ₹149. Cancel at any time.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <center><input type='text' className='input-box'placeholder='Enter email address'/><button>Get Started</button></center>
            
          </div>
      </div>
    </div>
  )
}

export default bannner
