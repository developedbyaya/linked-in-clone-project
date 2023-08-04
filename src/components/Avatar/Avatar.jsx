import React from 'react'

function Avatar({src, alt, size}) {

    const imageSize = {
        height: size, 
        width: size,
        borderRadius:"50%"
    };

  return (
    <div className='avatar'>
        <img src={src} alt={alt} style={imageSize}/>
    </div>
  )
}

export default Avatar