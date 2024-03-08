import "./sidebar.css"
import { useState, useEffect } from "react"
import { MdOutlineRssFeed } from "react-icons/md"
import { BsFillChatLeftTextFill, BsPlayCircleFill, BsFillBookmarkFill, BsQuestionCircle, BsCalendarEvent } from "react-icons/bs"
import { BiSolidGroup } from "react-icons/bi"
import { MdWorkOutline } from "react-icons/md"
import { GiGraduateCap } from 'react-icons/gi'
import Closefriends from "./Closefriends/Closefriends"

import { useParams } from "react-router-dom"
import { updateUserDate } from "../../FirebaseConfig/Firebase"


function Sidebar({ allUsers }) {
  const [listOfUsers, setListOfUsers] = useState([])
  const { email } = useParams()

  useEffect(() => {
    setListOfUsers(allUsers)
  }, [allUsers])

  const addFriend = (em) => {
    let friendToAdd = listOfUsers.filter(user => user.email === em)
    let newFriend = {
      userId: friendToAdd[0].userId,
      online: friendToAdd[0].online,
      profilePicture: friendToAdd[0].profileImage,
      username: friendToAdd[0].username,
      personalInfo: friendToAdd[0].personalInfo
    }
    let currentUser = listOfUsers.find(user => user.email === email)

    let docId = currentUser.docId
    let newFriendList = []
    if (!currentUser.friendsList) {
      newFriendList = currentUser.friendsList.push(newFriend)
    } else {
      newFriendList = [...currentUser.friendsList, newFriend]
    }
    let existingFriend = currentUser.friendsList.find(user => user.userId === newFriend.userId)
    if (!existingFriend) {
      updateUserDate(docId, { friendsList: newFriendList })
    } else {
      console.log(`you are friends with ${newFriend.username}`)
    }
  }


  const list = listOfUsers.filter(list => list.email !== email)


  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">

          <li className="sidebarListItem">
            <MdOutlineRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <BsFillChatLeftTextFill className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <BsPlayCircleFill className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>


          <li className="sidebarListItem">
            <BiSolidGroup className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>


          <li className="sidebarListItem">
            <BsFillBookmarkFill className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>


          <li className="sidebarListItem">
            <BsQuestionCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>


          <li className="sidebarListItem">
            <MdWorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>


          <li className="sidebarListItem">
            <BsCalendarEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>


          <li className="sidebarListItem">
            <GiGraduateCap className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>

        </ul>

        <button className="sidebarButton">Show More</button>

        <hr className="sidebarHr" />

        <h3><b>Find Friends</b></h3>
        <ul className="sidebarFriendList">
          {list.map(list => <Closefriends key={list.userId} list={list} addFriend={addFriend} />)}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar