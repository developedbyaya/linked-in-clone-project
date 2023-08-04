import React from 'react'
import "./SidebarItem.css"

function SidebarItem({Icon, title}) {
  return (
    <div className='sidebar-item'>
        {Icon && <Icon className="sidebar-item-icon"/>}
        <p className='sidebar-item-title'>{title}</p>
    </div>
  )
}

export default SidebarItem