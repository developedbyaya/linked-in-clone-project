import React from 'react'
import "./Feed.css"
import Avatar from '../Avatar/Avatar'
import ActionButton from '../ActionButton/ActionButton.component'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { Photo } from '@mui/icons-material';

function Feed() {
  return (
    <div className='feed'>
        <section className="feed-input-container">
            <div className="feed-input">
                <Avatar src="https://media.licdn.com/dms/image/D4E03AQH-w-mmrK4Tdg/profile-displayphoto-shrink_400_400/0/1688055844966?e=1696464000&v=beta&t=5vJ4-4Is9TceW38EH5txrMCMgmSGGM_5xYfzFylNvx0" alt="my-profile-image" size="45px"/>
                <button className="start-post">Start a post</button>
            </div>

            <div className="feed-actions">
                <ActionButton title="Photo"/>
                <ActionButton title="Video"/>
                <ActionButton title="Design"/>
                <ActionButton title="Write article"/>
            </div>
        </section>
    </div>
  )
}

export default Feed