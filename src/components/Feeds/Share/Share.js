import "./Share.css"
import '../Post/Post.css'
import { MdPermMedia } from "react-icons/md"
import { AiFillTag } from "react-icons/ai"
// import { FaLocationDot } from "react-icons/fa6"
import { BsEmojiHeartEyesFill } from "react-icons/bs"
import { useState } from "react"
import TagFriends from "../TagFriends/TagFriends"
import Previewpost from "../PreviewPost/Previewpost"
import { saveUserPostToDatabase } from "../../../FirebaseConfig/Firebase"
import { storage } from "../../../FirebaseConfig/Firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
// import { MdMoreVert } from "react-icons/md"


function Share({ user }) {
  const [postText, setPostText] = useState('')
  const [postImage, setPostImage] = useState(null)
  const [postTag, setPostTag] = useState([])
  const [postReaction, setPostReaction] = useState(null)
  const [addTag, setAddTag] = useState(false)
  const [addFeelings, setAddFeelings] = useState(false)
  const [addPostImage, setAddPostImage] = useState(null)
  const [previewPostImg, setPreviewPostImg] = useState(null)




  let currentUser = {}
  user.forEach(user => {
    return currentUser = { ...user }
  })


  const userPost = {
    userId: currentUser.userId,
    profileImage: currentUser.profileImage,
    username: currentUser.username,
    firstname: currentUser.firstname,
    lastname: currentUser.lastname,
    postText,
    comment: [],
    postTag: [...postTag],
    postReaction,
    postImage,
    postTime: new Date().toISOString(),
    likes: 0,
    love: 0
  }


  const sharePost = () => {
    setPostText('')
    setAddPostImage(null)
    setPostReaction('')
    saveUserPostToDatabase(userPost)

  }

  const uploadImage = async () => {
    if (addPostImage === null) return
    let postImgRef = ref(storage, `Post/${currentUser.email}/${addPostImage.name}`)
    await uploadBytes(postImgRef, addPostImage)

    let postIMG = await getDownloadURL(postImgRef)
    setPostImage(postIMG)

    setPreviewPostImg(null)
  }

  const handleImageFile = (e) => {
    setAddPostImage(e.target.files[0])
    setPreviewPostImg(URL.createObjectURL(e.target.files[0]))
  }

  const tagfriend = (userId) => {
    let newFriendToTag = currentUser.friendsList.filter(friend => friend.userId === userId)
    setPostTag(tag => [...tag, ...newFriendToTag])
  }

  const addNewTag = () => {
    setAddTag(!addTag)
    setAddFeelings(false)
  }

  const addNewFeelings = () => {
    setAddFeelings(!addFeelings)
    setAddTag(false)
  }

  const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
  }

  return (
    <>
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfileImg" src={currentUser.profileImage} alt="" />
            <input
              type="text"
              placeholder={`What's in your mind ${currentUser.username}?`}
              className="shareInput"
              onChange={(e) => setPostText(e.target.value)
              }
            />
          </div >

          <hr className="shareHr" />

          <div className="shareBottom">
            <div className="shareOptions">
              <label htmlFor="img">
                <div
                  id="file"
                  className="shareOption"
                >
                  <MdPermMedia style={{ color: "tomato" }} className="shareIcon" />
                  <span className="shareOptionText">
                    Select Photo
                  </span>
                </div>
              </label>
              <input
                style={{ display: 'none' }}
                type="file"
                id="img"
                onChange={handleImageFile}
              />


              <div className="shareOption" onClick={addNewTag} >
                <AiFillTag style={{ color: "blue" }} className="shareIcon" />
                <span className="shareOptionText">Tag</span>
              </div>
              {addTag && <div className="tagOptions">
                {currentUser.friendsList.map(friend => <TagFriends key={friend.userId} friend={friend} tagfriend={tagfriend} />)}
              </div>}


              {/* <div className="shareOption" >
              <FaLocationDot style={{ color: "green" }} className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div> */}


              <div className="shareOption" onClick={addNewFeelings}>
                <BsEmojiHeartEyesFill
                  style={{ color: "goldenrod" }} className="shareIcon" />
                <span className="shareOptionText">Feelings</span>
              </div>
              {addFeelings && <div className="fellingsOptions">
                <i onClick={() => setPostReaction(reactionEmoji.thumbsUp)}>{reactionEmoji.thumbsUp}</i>
                <i onClick={() => setPostReaction(reactionEmoji.heart)}>{reactionEmoji.heart}</i>
                <i onClick={() => setPostReaction(reactionEmoji.wow)}>{reactionEmoji.wow}</i>
                <i onClick={() => setPostReaction(reactionEmoji.coffee)}>{reactionEmoji.coffee}</i>
                <i onClick={() => setPostReaction(reactionEmoji.rocket)}>{reactionEmoji.rocket}</i>
              </div>}
            </div>
            <button className="shareButton"
              onClick={sharePost}
            >Shear Post</button>
          </div>
        </div >
      </div >
      {previewPostImg &&
        <Previewpost
          previewPostImg={previewPostImg}
          uploadImage={uploadImage} />}
    </>
  )
}

export default Share