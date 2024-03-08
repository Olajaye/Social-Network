import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'
import { updatePost } from '../../../FirebaseConfig/Firebase'

const Comment = ({ comment, postdocId, posts }) => {

  let timeago = ''
  const date = parseISO(comment.commentTime)
  const timePeriod = formatDistanceToNow(date)
  timeago = `${timePeriod} ago`

  const deleteComment = (id) => {
    let postComment = posts.find(post => post.docId === postdocId)
    let updatePosts = postComment.comment.filter(post => post.id !== id)
    updatePost(postdocId, { comment: [...updatePosts] })
  }


  return (

    <div className="commentList">
      <div className="commentProfile">
        <img
          className="postProfileImg"
          src={comment.profileImage}
          alt=""
        />
        <div className="commentPorfileRight">
          <div className="commentUsername">
            {comment.username}
          </div>
          <i className="commentUsername">{timeago}</i>
        </div>
        <button className='deleteComment' onClick={() => deleteComment(comment.id)}>Delete comment</button>
      </div>
      <div className=" commentText">
        {comment.commentText}
      </div>
    </div>


  )
}

export default Comment