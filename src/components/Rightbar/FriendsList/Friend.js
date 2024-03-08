import React from 'react'
import FriendList from '../FriendsList/FriendList'
import { updateUserDate } from '../../../FirebaseConfig/Firebase'


const Friend = ({ user, userFriendList }) => {
  const removeFriend = (userId) => {
    let newFriendList = userFriendList.filter(friend => friend.userId !== userId)
    let docId = user.map(user => user.docId)
    updateUserDate(...docId, { friendsList: newFriendList })
  }

  return (
    <>
      <h3 className="rightbarTitle"><b>Friends List</b></h3>
      <div className="rightbarFollowings">
        {userFriendList.length ?
          (userFriendList.map(friend => <FriendList key={friend.userId} friend={friend} removeFriend={removeFriend} />))
          : 'add new friends'}
      </div>
    </>
  )
}

export default Friend