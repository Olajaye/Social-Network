import "./Login.css"
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginWithEmailAndPassWord } from "../../Redux/Slice/LoginSlice"
import { getAllUserDatabase, selectAllUsers } from '../../Redux/Slice/UserSlice'
import { useDispatch, useSelector } from "react-redux"
import { authChange, getUserDate } from "../../FirebaseConfig/Firebase"






function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const allUsers = useSelector(selectAllUsers)

  useEffect(() => {
    dispatch(getAllUserDatabase())
    const fetchuser = async () => {
      const data = await getUserDate(email)
      console.log(data)
    }
    fetchuser()
  }, [dispatch])

  console.log(allUsers)



  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (allUsers) {
  //     let inidividualUser = allUsers.filter(user => user.email === email)
  //     inidividualUser = inidividualUser[0]
  //     if (inidividualUser) {
  //       dispatch(LoginWithEmailAndPassWord(inidividualUser))
  //       navigate(`/home/${inidividualUser.email}`)
  //     }
  //   }
  // }

  const loginInput = {
    email, password
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(LoginWithEmailAndPassWord(loginInput))
    authChange(user => {
      if (user !== null) {
        navigate(`/home/${email}`)
      }
    })
  }





  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Jaye.NET</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on JayeSocial.
          </span>
        </div>
        <form className="loginRight" onSubmit={handleSubmit}>
          <div className="loginBox">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="loginInput"
              name="email"
            />

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="loginInput"
              name="password"
            />

            <div className="loginButton-container">
              <button
                type="submit"
                className="loginButton"
              >Log In</button>

              <Link to={'/reset-password'} className="loginForgot">Forgot Password?</Link>
            </div>

            <Link to={"/create"} className="loginRegisterButtonlink">
              Create a New Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login