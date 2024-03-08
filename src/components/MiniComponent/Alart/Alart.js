import React from 'react'


const Alart = ({ icon, msg, type }) => {
  return (
    <div className="loginAlart">
      <div className={type}>
        <i>{icon}</i>
        <p>{msg}</p>
      </div>
    </div>
  )
}

export default Alart