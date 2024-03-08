import React, { useState } from 'react'

const UserFriendRequest = () => {
  const [user, setUser] = useState([{
    id: 1,
    profilePicture: "/asset/person/person1.jpeg",
    username: "Safak Kocaoglu",
  },
  {
    id: 2,
    profilePicture: "/asset/person/2.jpeg",
    username: "Janell Shrum",
  },
  {
    id: 3,
    profilePicture: "/asset/person/3.jpeg",
    username: "Alex Durden",
  },
  {
    id: 4,
    profilePicture: "/asset/person/4.jpeg",
    username: "Dora Hawks",
  }])
  console.log(setUser)
  return (
    <div className='userProfile'>
      {user.map(user => {
        return (
          <li className="sidebarFriend">
            <div className='sidebarFriendCon'>
              <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">{user.username}</span>
            </div>
            <button>Accept Request</button>
          </li>
        )
      })}

      <div className="birthdayContainer">
        <img className="birthdayImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQgQ1sVqsnU3HZIMMbKjg5GlNkGD8qjCHfWECuTBxYQJAgn8GqjflEi9eXbcoO_iZ3Bo&usqp=CAU" alt="" />
        <span className="birthdayText">
          <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
        </span>
      </div>

      <img className="rightbarAd" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjipxn0dCaLR28em_aHRS-yV0lD80sqZzf2TOOs3kL3A&s" alt="" />


    </div>
  )
}

export default UserFriendRequest