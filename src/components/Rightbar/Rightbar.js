import "./right.css"

import ProfileBar from "./ProfileRightbar/ProfileBar"
import Notification from "./Notification/Notification"
import Friend from "./FriendsList/Friend"


function Rightbar({ user, onlineUser, userFriendList }) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Notification />
        <ProfileBar
          user={user}
          onlineUser={onlineUser} />
        <Friend
          user={user}
          userFriendList={userFriendList} />
      </div>
    </div>
  )
}

export default Rightbar