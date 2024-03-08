import { useEffect, useState } from "react"

const UserInfo = ({ user }) => {
  const [info, setInfo] = useState(...user)

  useEffect(() => {
    setInfo(...user)
  }, [user])


  return (
    <>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">{info?.personalInfo?.city}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">State:</span>
        <span className="rightbarInfoValue">{info?.personalInfo?.state}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Country:</span>
        <span className="rightbarInfoValue">{info?.personalInfo?.country}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Current Locataion</span>
        <span className="rightbarInfoValue">{info?.personalInfo?.currentLocation}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Date Of Birth:</span>
        <span className="rightbarInfoValue">{info?.personalInfo?.dateofbirth}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Phone:</span>
        <span className="rightbarInfoValue">{info?.personalInfo?.phone}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Website:</span>
        <span className="rightbarInfoValue">{info?.personalInfo?.website}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </>
  )
}

export default UserInfo