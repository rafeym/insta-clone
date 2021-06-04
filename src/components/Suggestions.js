import '../styles/suggestions.scss'
import Profile from './Profile'

const Suggestions = () => {
  return (
    <div className='suggestions'>
      <div className='titleContainer'>
        <div className='title'>Suggestions For You</div>
        <a href='/'>See All</a>
      </div>
      <Profile
        caption='Followed by loremIpsum + 3 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
        storyBorder={true}
      />
      <Profile
        caption='Followed by loremIpsum + 7 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
        storyBorder={true}
      />
      <Profile
        caption='Followed by loremIpsum + 4 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
      />
      <Profile
        caption='Follows you'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
        storyBorder={true}
      />
      <Profile
        caption='Followed by loremIpsum + 1 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
      />
    </div>
  )
}

export default Suggestions
