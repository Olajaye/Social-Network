import "./Topbar.css"
import { AiOutlineSearch } from "react-icons/ai"
import { BsFillPersonFill, BsFillChatLeftTextFill } from "react-icons/bs"
import { IoIosNotifications } from "react-icons/io"
import { Link, useParams } from "react-router-dom"

function Topbar() {
  const { email } = useParams()
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Jaye.Net</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <AiOutlineSearch className="searchIcon" />
            <input type="text"
              placeholder="Search for friend, post or video" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">

          <div className="topbarLinks">
            <Link className="topbarLink" to={`/home/${email}`}>Homepage</Link>
            <div className="topbarLink">Log Out</div>
          </div>

          <div className="topbarIcons">
            <div className="topbarIconItem">
              <BsFillPersonFill />
              <span className="topbarIconBadge">1</span>
            </div>

            <div className="topbarIconItem">
              <BsFillChatLeftTextFill />
              <span className="topbarIconBadge">2</span>
            </div>

            <div className="topbarIconItem">
              <IoIosNotifications />
              <span className="topbarIconBadge">1</span>
            </div>

          </div >
          <Link to={`/profile/${email}`}>
            <img src="/asset/person/person1.jpeg" alt="" className="topbarImg" />
          </Link>

        </div>
      </div>
    </>
  )
}

export default Topbar