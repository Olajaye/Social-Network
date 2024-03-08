import React from 'react'

const FriendList = ({ friend, removeFriend }) => {

  return (
    <li className="rightbarFollowing" >
      <div className='rightbarFollowingCon'>
        <img src={friend.profilePicture} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">{friend.username}</span>
      </div>
      <button onClick={() => removeFriend(friend.userId)}>Remove Friend</button>
    </li>
  )
}

export default FriendList