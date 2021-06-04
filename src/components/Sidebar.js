import React from 'react'
import '../styles/sidebar.scss'

import Sticky from 'react-sticky-el'
import Profile from './Profile'
import Suggestions from './Suggestions'
import Footer from './Footer'
import image from '../images/profile.png'

const Sidebar = () => {
  return (
    <Sticky topOffset={-80}>
      <div className='sidebar'>
        <Profile
          username='rafeym'
          caption='Mohammad Rafey'
          urlText='Switch'
          iconSize='large'
          image={image}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  )
}

export default Sidebar
