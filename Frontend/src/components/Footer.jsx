import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>EventByte</h1>
          <p>Elevate your event to extraordinary!</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder='email' />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receive news and updates!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer