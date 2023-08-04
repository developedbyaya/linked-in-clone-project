import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SidebarItem from './SidebarItem';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import AddIcon from '@mui/icons-material/Add';

function Sidebar() {
  return (
    <section className='sidebar'>
        <article className="sidebar-top">
            {/* <div className="background-image"></div> */}
            <div className="sidebar-description">
                <img src="https://media.licdn.com/dms/image/D4E16AQF_bC9t9wyMIA/profile-displaybackgroundimage-shrink_350_1400/0/1688054532368?e=1696464000&v=beta&t=W39uarQ-pZKEyyFYlh41s6hPv9Ydkga_B95WoKRllsY" alt="" className="profile-image" />
                <Avatar className='avatar-picture' src="https://media.licdn.com/dms/image/D4E03AQH-w-mmrK4Tdg/profile-displayphoto-shrink_400_400/0/1688055844966?e=1696464000&v=beta&t=5vJ4-4Is9TceW38EH5txrMCMgmSGGM_5xYfzFylNvx0"/>
                <h2>Ayabulela Pinana</h2>
                <p>Front-End Web Developer (HTML, CSS, JavaScript, ReactJS, Java, C++)</p>
            </div>

            <div className="connections">
                <div className="connections-stats">
                    <p className='connection-stat'>Connections</p>
                    <p className="connection-count">167</p>
                </div>
                <p className="grow-connections">Grow your network</p>
            </div>

            <div className="premium-sign-up">
                <p>Access exclusive tools and insights</p>
                <h3><a href="https://www.linkedin.com/premium/" className="premium-link">Try premium for free</a></h3>
            </div>

            <div className="my-items">
                <SidebarItem Icon={BookmarkIcon} title="My Items"/>
            </div>
        </article>

        <article className="sidebar-bottom">
            <div className="recents">
                <p>Recent</p>
                <SidebarItem Icon={CalendarTodayIcon} title="See the #1 Sales Machine Used..."/>
            </div>

            <div className="groups">
                <h3><a href="https://www.linkedin.com/groups/">Groups</a></h3>
            </div>

            <div className="recents">
                <h3><a href="https://www.linkedin.com/events/">Events</a><span className='plus'>+</span></h3>
                <SidebarItem Icon={CalendarTodayIcon} title="See the #1 Sales Machine Used..."/>
                <SidebarItem Icon={CalendarTodayIcon} title="See the #1 Sales Machine Used..."/>
                <SidebarItem Icon={CalendarTodayIcon} title="See the #1 Sales Machine Used..."/>
            </div>
        </article>
    </section>
  )
}

export default Sidebar