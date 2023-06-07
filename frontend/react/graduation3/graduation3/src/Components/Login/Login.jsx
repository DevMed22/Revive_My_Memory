import React from 'react'

export default function Login() {
  
  return (
    <>
    <div className='parent-box'>
    <div className="login-box mb-5 p-5">
  <h3 className='text-center text-white'>Login</h3>
  <form>
    <div className="user-box">
      <input type="text" name required />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name required />
      <label>Password</label>
    </div>
    <a href="#">
      <span />
      <span />
      <span />
      <span />
      Submit
    </a>
  </form>
</div>
    </div>


    </>
  )
}
