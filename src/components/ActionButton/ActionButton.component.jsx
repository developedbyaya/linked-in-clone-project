import React from 'react';
import "./ActionButton.style.css";

function ActionButton({Icon, title}) {
  return (
    <button className='action-button'>
        {Icon}<p>{title}</p>
    </button>
  )
}

export default ActionButton