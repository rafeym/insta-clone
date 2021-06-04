import React from 'react'
import '../styles/profileIcon.scss'

const ProfileIcon = (props) => {
  const { iconSize, storyBorder, image } = props

  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const result = Math.floor(Math.random() * (max - min + 1)) + min

    return result
  }

  let randomId = getRandomInt(1, 70)

  // If image is not passed as prop random image provided from pravatar
  let profileImage = image ? image : `https://i.pravatar.cc/150?img=${randomId}`

  return (
    <div className={storyBorder ? 'storyBorder' : ''}>
      <img
        src={profileImage}
        alt='profile'
        className={`profile-icon ${iconSize}`}
      />
    </div>
  )
}

export default ProfileIcon
