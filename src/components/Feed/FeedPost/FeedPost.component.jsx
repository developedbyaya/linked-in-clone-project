import { Avatar } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEarthAfrica, faThumbsUp, faMessage, faPaperPlane, faRepeat} from '@fortawesome/free-solid-svg-icons';
import "./FeedPost.style.css";
import ActionButton from '../../ActionButton/ActionButton.component';

function FeedPost ({src, alt, name, year, skills, posttime}) {
  return (
    <section className='feed-post'>
        <div className="post-header">
            <Avatar src={src} alt={alt} style={{width:"50px", height:"50px"}}/>

            <div className="user-description">
                <div className="description">
                    <p className="name"> 
                    <span className="name-color">{name} </span>
                       <span className='dot' style={{fontSize:"5px", color:"gray"}}>&#9899;</span> 
                    {year}
                    </p>
                </div>

                <div className="skills-section">
                    <p className="skills">{skills}</p>
                    <div className="follow-button">
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                </div>

                <div className="date-posted">
                    <p>{posttime}</p>
                    <span className='dot' style={{fontSize:"5px", color:"gray"}}>&#9899;</span> 
                    <FontAwesomeIcon icon={faEarthAfrica} />
                </div>
            </div>
        </div>

        <div className="post-body">
            <p>This is my first linked in post hooray!!</p>
        </div>

        <div className="post-buttons">
            <ActionButton title="Like" Icon={<FontAwesomeIcon icon={faThumbsUp} />}/>
            <ActionButton title="Comment" Icon={<FontAwesomeIcon icon={faMessage} />}/>
            <ActionButton title="Share" Icon={<FontAwesomeIcon icon={faRepeat} />}/>
            <ActionButton title="Send" Icon={<FontAwesomeIcon icon={faPaperPlane} />}/>
        </div>
    </section>
  )
}

export default FeedPost;
