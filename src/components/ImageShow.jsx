import React from 'react'

export default function ImageShow({image}) {
  return (
    //<div>ImageShow</div>
    //<div>{image.alt_description}</div>
    <img src={image.urls.small} alt={image.alt_description} />
  )
}
