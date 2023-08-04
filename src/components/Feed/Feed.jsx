import React from 'react'
import "./Feed.css"
import Avatar from '../Avatar/Avatar'
import ActionButton from '../ActionButton/ActionButton.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faVideo, faNewspaper, faPencil } from '@fortawesome/free-solid-svg-icons';
import FeedPost from "./FeedPost/FeedPost.component";

function Feed() {
  return (
    <div className='feed'>
        <section className="feed-input-container">
          <div className="feed-input">
              <Avatar src="https://media.licdn.com/dms/image/D4E03AQH-w-mmrK4Tdg/profile-displayphoto-shrink_400_400/0/1688055844966?e=1696464000&v=beta&t=5vJ4-4Is9TceW38EH5txrMCMgmSGGM_5xYfzFylNvx0" alt="my-profile-image" size="45px"/>
              <button className="start-post">Start a post</button>
          </div>

          <div className="feed-actions">
              <ActionButton Icon={<FontAwesomeIcon icon={faImage} color='rgb(55, 143, 233)'/>} title="Photo"/>
              <ActionButton Icon={<FontAwesomeIcon icon={faVideo} color='#5f9b41'/>} title="Video"/>
              <ActionButton Icon={<FontAwesomeIcon icon={faPencil} color="rgb(192, 152, 238)" />} title="Design"/>
              <ActionButton Icon={<FontAwesomeIcon icon={faNewspaper} color='rgb(225, 103, 69)'/>} title="Write article"/>
          </div>
        </section>

        <section className="feed-posts">
          {/* {src, alt, name, year, skills, posttime} */}
          <FeedPost src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="user-profile-image" name="John Snow" year="2nd" skills="Junior Software Developer | Java | Python | JavaScript | ..." posttime="4d"/>
        </section>
    </div>
  )
}

export default Feed