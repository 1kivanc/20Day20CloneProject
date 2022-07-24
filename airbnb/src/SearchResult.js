import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

function SearchResult({

    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon
          className="searchResultHeart"
      />
      <div className="searchResultInfo">
          <div className="searchResultInfoTop">
                <p>{location}</p>
                <h3>{title}</h3>
                <p>{description}</p>

          </div>

          <div className="searchResultInfoBottom">
                    <div className="searchResultStars">
                        <StarIcon
                            className="searchResultStar"
                        />
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResultPrice">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
          </div>
      </div>
      
    </div>
  )
}

export default SearchResult
