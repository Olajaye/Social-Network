import React from 'react'

const SignUpForm = () => {
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form action="">
        <label htmlFor="">Display Name</label>
        <input required type="text" />

        <label htmlFor="">Email</label>
        <input required type="email" />

        <label htmlFor="">Password</label>
        <input required type="password" />

        <label htmlFor="">Confirm Password</label>
        <input required type="password" />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm