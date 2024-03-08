import { useEffect, useState } from "react"
import Feeds from "../../components/Feeds/Feeds"
import Rightbar from "../../components/Rightbar/Rightbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import { onSnapshot } from "firebase/firestore"
import { userCollectionRef } from "../../FirebaseConfig/Firebase"
import "./Home.css"
import { useParams } from "react-router-dom"
import { selectLogedInUser } from "../../Redux/Slice/LoginSlice"
import { useDispatch, useSelector } from "react-redux"


const Home = () => {
  const [currentUser, setCurrentUser] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [onlineUser, setOnlineUser] = useState([])
  const [userFriendList, setUserFriendList] = useState([])
  const { email } = useParams()
  const loginUser = useSelector(selectLogedInUser)
  console.log(loginUser)

  useEffect(() => {

    onSnapshot(userCollectionRef, (data) => {
      let allUsers = data.docs.map(doc => ({ ...doc.data(), docId: doc.id }))
      let presentUser = allUsers.filter(user => user.email === email)
      console.log(presentUser)
      let friendList = []
      presentUser.forEach(user => {
        friendList.push(...user.friendsList)
      })
      let OnlineFriends = friendList.filter(friend => friend.online === true)
      setUserFriendList(friendList)
      setOnlineUser(OnlineFriends)
      setCurrentUser(presentUser)
      setAllUsers(allUsers)
    })
  }, [email])




  return (
    <>
      <div className="homeContainer">
        <Sidebar allUsers={allUsers} />
        <Feeds user={currentUser} />
        <Rightbar
          user={currentUser}
          onlineUser={onlineUser}
          userFriendList={userFriendList}
        />
      </div>
    </>
  )
}

export default Home

