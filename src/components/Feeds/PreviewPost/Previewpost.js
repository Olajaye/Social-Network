import React from 'react'
import './Previewpost.css'


const Previewpost = ({ previewPostImg, uploadImage }) => {
  return (
    <div className="preview">
      <div className="previewWrapper">
        <div className="previewBottom">
          <button onClick={uploadImage}
            className='removeButton'
          >Select Image</button>
        </div>
        <div className="previewCenter">
          <img className="previewImg" src={previewPostImg} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Previewpost