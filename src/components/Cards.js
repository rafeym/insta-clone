import React from 'react'
import '../styles/cards.scss'

import Stories from './Stories'
import Card from './Card'

const Cards = () => {
  const commentsOne = [
    {
      user: 'Tyler',
      text: 'Woah dude, this is awesome! 🔥',
      id: 1,
    },
    {
      user: 'codingIsFun',
      text: 'Like!',
      id: 2,
    },
    {
      user: 'trryx49',
      text: 'Niceeeee!',
      id: 3,
    },
  ]

  const commentsTwo = [
    {
      user: 'mapvault',
      text: 'Amazing content, keep it up!',
      id: 4,
    },
  ]

  const commentsThree = [
    {
      user: 'dadatlacak',
      text: 'Love this!',
      id: 5,
    },
  ]
  return (
    <div className='cards'>
      <Stories />
      <Card
        accountName=''
        storyBorder={true}
        image='https://picsum.photos/800/900'
        comments={commentsOne}
        likedByText='Bryan'
        likedByNumber={75}
        hours={3}
      />
      <Card
        accountName=''
        storyBorder={true}
        image='https://picsum.photos/700/900'
        comments={commentsTwo}
        likedByText='Bryan'
        likedByNumber={115}
        hours={5}
      />
      <Card
        accountName=''
        storyBorder={true}
        image='https://picsum.photos/600/900'
        comments={commentsThree}
        likedByText='Bryan'
        likedByNumber={20}
        hours={16}
      />
    </div>
  )
}

export default Cards
