import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@mui/material'

function HeaderOption({Icon, title, avatar}) {
  return (
    <div className='header-option'>
        {Icon && <Icon className="header-option-icon" />}
        {avatar && (
        <Avatar className="header-option-icon" src={avatar}/>)
        }
        <h3 className="header-option-title">{title}</h3>
    </div>
  )
}

export default HeaderOption