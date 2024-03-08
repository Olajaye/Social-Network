import "./profile.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { onSnapshot } from "firebase/firestore"
import { userCollectionRef } from "../../FirebaseConfig/Firebase"
import ProfileNotification from "./ProfileNitification/ProfileNotification"
import UserFriendRequest from "./UserFriendRequest.js/UserFriendRequest"
import UserProfile from "./UserProfile.js/UserProfile"



function Profile() {
  const [currentUser, setCurrentUser] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const { email } = useParams()

  useEffect(() => {
    onSnapshot(userCollectionRef, (data) => {
      let allUsers = data.docs.map(doc => ({ ...doc.data(), docId: doc.id }))
      let presentUser = allUsers.filter(user => user.email === email)
      setCurrentUser(presentUser)
      setAllUsers(allUsers)
    })
  }, [email])

  console.log(currentUser, allUsers)

  return (
    <>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/asset/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/asset/person/7.jpeg"
                alt=""
              />
            </div>

            <div className="profileInfo">
              <h4 className="profileInfoName">{`hey`}</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <UserFriendRequest />
            <UserProfile />
            <ProfileNotification />
          </div>
        </div>
      </div>
    </>

  )
}

export default Profile