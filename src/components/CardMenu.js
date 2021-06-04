import React from 'react'
import { ReactComponent as Direct } from '../images/direct.svg'
import { ReactComponent as Bookmark } from '../images/bookmark.svg'
import { ReactComponent as Comments } from '../images/comment.svg'
import { ReactComponent as Notifications } from '../images/notifications.svg'

import '../styles/cardmenu.scss'

const CardMenu = () => {
  return (
    <div className='cardMenu'>
      <div className='interactions'>
        <Notifications className='icon' />
        <Comments className='icon' />
        <Direct className='icon' />
      </div>
      <Bookmark className='icon' />
    </div>
  )
}

export default CardMenu
