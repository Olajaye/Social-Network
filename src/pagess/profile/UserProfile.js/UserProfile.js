import React from 'react'
import UserInfo from '../../../components/Rightbar/ProfileRightbar/UserInfo'


const UserProfile = () => {
  return (
    <>
      <div className="userProfile">
        <h3 className="rightbarTitle"><b>Personal Information</b></h3>
        <div className="rightbarInfo">
          <UserInfo user={[]} />
        </div>
      </div>


    </>
  )
}

export default UserProfile