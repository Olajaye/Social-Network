import "./Post.css"
import { useState } from "react"
import { MdMoreVert } from "react-icons/md"
import { parseISO, formatDistanceToNow } from 'date-fns'
import { deletePostFromDatabase, updatePost } from "../../../FirebaseConfig/Firebase"
import Comment from "../Comment/Comment"
import { nanoid } from "@reduxjs/toolkit"



function Post({ post, user, posts }) {
  const [menu, setMenu] = useState(false)
  const [commentText, setCommentText] = useState("")
  const [viewComment, setViewComment] = useState(false)


  let timeago = ''
  const date = parseISO(post.postTime)
  const timePeriod = formatDistanceToNow(date)
  timeago = `${timePeriod} ago`


  const openMenu = (docId) => {
    if (post.docId === docId) {
      setMenu(!menu)
    }
  }

  const viewComBtn = (docId) => {
    if (post.docId === docId) {
      setViewComment(!viewComment)
    }
  }

  const deletePost = (docId) => {
    deletePostFromDatabase(docId)
  }



  const shearComment = (id) => {
    let comment = {
      id: nanoid(),
      profileImage: user.map(user => user.profileImage).toString(),
      username: user.map(user => user.username).toString(),
      commentText: commentText,
      commentTime: new Date().toISOString()
    }
    let initialPost = posts.find(post => post.docId === id)
    let newCommentList = [...initialPost.comment, comment]
    updatePost(id, { comment: newCommentList })
  }

  const likePost = (docId) => {
    if (post.docId === docId) {
      updatePost(docId, { likes: post.likes + 1 })
    }
  }




  return (
    <div className="post">
      <div className="postWrapper">

        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={post.profileImage}
              alt=""
            />
            <span className="postUsername">
              {post.lastname} {post.firstname}
            </span>
            <span className="postDate">{timeago}</span>
          </div>
          <div className="postTopRight">
            <MdMoreVert onClick={() => openMenu(post.docId)} />
            {menu && <div className="postMenu" >
              <button className="menubtn" onClick={() => deletePost(post.docId)}>Delete</button>
            </div>}
          </div>
        </div>

        {/* height of laziness */}
        <div className="tagsContent">
          {post.postReaction &&
            `${post.username} is felling ${post.postReaction} with 
            ${post.postTag.slice(0, 2).map(tag => tag.username).join(', ')} 
            ${`${post.postTag.slice(2)}` && `and ${!post.postTag.slice(2).length ? 'zero' : post.postTag.slice(2).length} other's`} `}
        </div>

        <div className="postCenter">
          <span className="postText">{post.postText}</span>
          <img className="postImg" src={post.postImage} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="postLikeCounter">{post.likes}</span>
            <img className="likeIcon" src="/asset/like.png" alt="" onClick={() => likePost(post.docId)} />
            {/* <span className="postLikeCounter">{post.love}</span>
            <img className="likeIcon" src="/asset/heart.png" alt="" /> */}
          </div>

          <div className="postBottomRight">
            <span className="postCommentText" onClick={() => viewComBtn(post.docId)} >{post.comment.length} comments</span>
          </div>
        </div>
        {viewComment && <div className='commentContainer' >
          <div className="comments">
            <div className="commentInput">
              <img className="shareProfileImg" src={user.map(user => user.profileImage).toString()} alt="" />
              <input
                type="text"
                placeholder={`What's in your comment?`}
                className="shareInput"
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button
                className="shareButton"
                onClick={() => shearComment(post.docId)}
              >Shear Post</button>
            </div>
          </div>
          {post.comment.map(comment => <Comment
            key={nanoid()}
            comment={comment}
            posts={posts}
            postdocId={post.docId}
          />)}
        </div>}
      </div>

    </div >
  )

}

export default Post