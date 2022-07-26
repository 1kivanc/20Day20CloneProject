import React from 'react'
import './TweetBox.css'

import { Avatar , Button } from '@mui/material'

function Tweetbox() {
  return (
    <div className='tweetbox'>
        <from>
            <div className='tweetBoxInput'>
                    <Avatar src="https://i.pravatar.cc/300" />
                    <input placeholder="What's happening ?" type="text"/>
                    
            </div>
            <input className='tweetboxImageInput' placeholder='Enter image Url' type="text" /> 

            <Button className='tweetboxButton'>Tweet</Button>
        </from>

    </div>
  )
}

export default Tweetbox