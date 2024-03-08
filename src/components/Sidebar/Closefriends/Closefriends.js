import React from 'react'

function Closefriends({ list, addFriend }) {

  return (
    <li className="sidebarFriend">
      <div className='sidebarFriendCon'>
        <img src={list.profileImage} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{list.username}</span>
      </div>
      <button onClick={() => addFriend(list.email)}>Add Friend</button>
    </li>
  )
}

export default Closefriends