import Online from './Online'

const OnlineFriends = ({ onlineUser }) => {
  return (
    <>
      <h3 className="rightbarTitle"><b>Online Friends</b></h3>
      <ul className="rightbarFriendList">
        {onlineUser.map(user => <Online key={user.userId} user={user} />)}
      </ul>
    </>

  )
}

export default OnlineFriends