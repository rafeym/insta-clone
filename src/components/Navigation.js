import React from 'react'
import '../styles/navigation.scss'
import logo from '../images/insta-logo.png'
import searchIcon from '../images/search-icon.png'
import Menu from './Menu.js'

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='container'>
        <img src={logo} alt='instagram logo' className='logo' />
        <div className='search-bar'>
          <img src={searchIcon} alt='search icon' className='search-icon' />
          <span className='search-text'>Search</span>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default Navigation
