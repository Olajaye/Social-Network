import "./feeds.css"
import Share from "../Feeds/Share/Share"
import Post from "../Feeds/Post/Post"
import { onSnapshot } from "firebase/firestore"
import { postCollectionRef } from "../../FirebaseConfig/Firebase"
import { useEffect, useState } from "react"

function Feeds({ user }) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    onSnapshot(postCollectionRef, (data) => {
      let Posts = data.docs.map(doc => ({ ...doc.data(), docId: doc.id }))
      setPosts(Posts)
    })
  }, [])

  let PostOrderedList = posts.slice().sort((a, b) => b.postTime.localeCompare(a.postTime))


  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share user={user} />
        {PostOrderedList.map((post) => {
          return <Post key={post.docId} post={post} user={user} posts={posts} />
        })}
      </div>
    </div>
  )
}

export default Feeds