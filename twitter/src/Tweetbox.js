import React from 'react'
import './TweetBox.css'

import { Avatar , Button } from '@mui/material'

function Tweetbox() {
  return (
    <div className='tweetbox'>
        <from>
            <div className='tweetBoxInput'>
                    <Avatar src="https://i.pravatar.cc/150?img=3" />
                    <input placeholder="What's happening ?" type="text"/>
                    
            </div>
            <div>
            <input className='tweetboxImageInput' placeholder='Enter image Url' type="text" /> 
            </div>
            

            <Button className='tweetboxButton'>Tweet</Button>
        </from>

    </div>
  )
}

export default Tweetbox