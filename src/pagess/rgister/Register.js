import { useEffect, useState } from "react"
import Input from "../../components/MiniComponent/Input/input"
import "./register.css"
import { Link, useNavigate } from 'react-router-dom'
import { createWithEmailAndPassWord } from "../../Redux/Slice/LoginSlice"
import { useDispatch } from "react-redux"





function Register() {
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [regInfo, setRegInfo] = useState('')
  const [checked, setChecked] = useState(false)

  const { firstname, lastname, email, password, confirmPassword, username } = register

  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    setInterval(() => {
      setRegInfo('')
    }, 5000)
  }, [regInfo])


  const handleRegister = (e) => {
    const { name, value } = e.target
    setRegister(prveRegister => {
      return {
        ...prveRegister,
        [name]: value
      }
    })
  }


  const User = {
    userId: '',
    firstname,
    lastname,
    username,
    email,
    password,
    profileImage: '',
    friendsList: [],
    friendRequest: [],
    online: false,
    personalInfo: {
      city: "",
      country: '',
      state: "",
      dateofbirth: '',
      currentLocation: "",
      Relationship: ["Single", "Married", "Complicated"],
      phone: "",
      website: '',
    },
  }


  let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const registration = async () => {
    if (password === confirmPassword && email.match(emailReg) && checked === true) {
      dispatch(createWithEmailAndPassWord(User))
      navigate(`/profile/${email}`)
    } else {
      setRegInfo('password doesnt match')
    }
  }




  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    registration()
  }



  return (
    <div className="login">
      <div className="registerWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Jaye.NET</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on JayeSocial.
          </span>
        </div>

        <div className="loginRight">
          <form className="registerBox" onSubmit={handleRegisterSubmit}>
            <Input
              value={firstname}
              placeholder={"Firstname"}
              type={"text"}
              name={"firstname"}
              func={handleRegister}
            />
            <Input
              value={lastname}
              placeholder={"Lastname"}
              type={"text"}
              name={"lastname"}
              func={handleRegister}
            />
            <Input
              value={username}
              placeholder={"Username"}
              type={"text"}
              name={"username"}
              func={handleRegister}
            />
            <Input
              value={email}
              placeholder={"Email"}
              type={"email"}
              name={"email"}
              func={handleRegister}
            />
            <Input
              value={password}
              placeholder={"Password"}
              type={"password"}
              name={"password"}
              func={handleRegister}
            />
            <Input
              value={confirmPassword}
              placeholder={"Confirm Password"}
              type={"password"}
              name={"confirmPassword"}
              func={handleRegister}
            />

            <div className="loginterms">
              <Input
                checked={checked}
                name={"checked"}
                id={"checkbox"}
                type={'checkbox'}
                func={() => setChecked(!checked)}
              />
              <label htmlFor="checkbox">I Agree to all the terms and condition</label>
            </div>

            <button
              type="submit"
              className="registerButton"
              disabled={checked === false}
            >Sign Up</button>


            <Link to={"/"} className="registerButtonlink">
              Log into Account</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register