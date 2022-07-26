import './Post.css'
import { Avatar } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {

    
  return (
    <div className='post'>
        <div className='postAvatar'>
            <Avatar src="https://i.pravatar.cc/300" />
        </div>
        <div className='postBody'>
            <div className='postHeader'>
                <div className='postHeaderText'>
                    <h3>
                        Kıvanç çoban <span className='postHeaderSpecial'>
                            <CheckCircleIcon className="postBadge"/>
                            @kivanccoban
                        </span> 
                    </h3>
                </div>
                <div className='postHeaderDes'>
                    <p>I'm frontend developer</p>
                </div>
            </div>
            <img src="https://picsum.photos/300/300"/>
            <div className='postFooter'>
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize='small' />
            </div>
        </div>
    </div>
  )
}

export default Post