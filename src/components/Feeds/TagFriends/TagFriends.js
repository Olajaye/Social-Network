import React from 'react'
import './tagfriend.css'

const TagFriends = ({ friend, tagfriend }) => {


  return (
    <div className='tagfriends'>
      <div className='tagFriendCon'>
        <img src={friend.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{friend.username}</span>
      </div>
      <button onClick={() => tagfriend(friend.userId)}>Tag</button>
    </div>
  )
}

export default TagFriends