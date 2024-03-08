import React from 'react'
import OnlineFriends from './OnlineFriends'
// import UserInfo from './UserInfo'


const ProfileBar = ({ user, onlineUser }) => {
  return (
    <>
      <OnlineFriends onlineUser={onlineUser} />
      {/* <h3 className="rightbarTitle"><b>Information</b></h3> */}
      {/* <div className="rightbarInfo">
        <UserInfo user={user} />
      </div> */}
    </>
  )
}

export default ProfileBar