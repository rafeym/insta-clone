import ProfileIcon from './ProfileIcon'
import users from '../data/users'

import '../styles/story.scss'

const Story = () => {
  // Get username
  let accountName = users[Math.floor(Math.random() * users.length)].username

  //   If account name too long shorten it
  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + '...'
  }

  return (
    <div className='story'>
      <ProfileIcon iconSize='large' storyBorder={true} />
      <span className='account-name'>{accountName}</span>
    </div>
  )
}

export default Story
