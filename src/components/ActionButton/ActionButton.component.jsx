import React from 'react';
import "./ActionButton.style.css";
// import { Icon } from '@material-ui/core';

function ActionButton({Icon, title}) {
  return (
    <div className='action-button'>
      {Icon}
      <p>{title}</p>
    </div>
  )
}

export default ActionButton  