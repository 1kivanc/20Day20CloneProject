import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import  {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';


function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgetsInput'>
          <SearchIcon className="widgetsSearchIcon"/>
          <input placeholder='Search Twitter' type="text" />
        </div>

       <div className='widgetsContainer'>
          <h2> What's happening</h2>

          <TwitterTweetEmbed tweetId={"1508838714180612100"}/>


          <TwitterTimelineEmbed 
            sourceType="profile"
            screenName='reactjs'
            options={{height:400}}
          />
        </div> 
    </div>
  )
}

export default Widgets