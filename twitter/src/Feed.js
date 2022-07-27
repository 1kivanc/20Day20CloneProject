import React , { useState , useEffect} from 'react'
import './Feed.css'
import Tweetbox from './Tweetbox'
import Post from './Post'


function Feed() {
  
  return (
    <div className='feed'>
      <div className='feedHeader'>
        <h2>Home</h2>
      </div>

      <Tweetbox />

      <Post 
      
      displayName="Kıvanc Çoban"
      username="@kivanccoban"
      text='this is a twitter clone'
      avatar="https://i.pravatar.cc/150?img=3"
      image="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
      />
      <Post 
          displayName='Lorem'
          username='@loremipsum'
          text='this is soo amazing !!'
          avatar='https://i.pravatar.cc/150?img=4'
          image="https://media.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif"
      />

  
  
      

    </div>
  )
}

export default Feed