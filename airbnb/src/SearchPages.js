import React from 'react'
import './SearchPage.css'
import Button from '@mui/material/Button';
import Search from './Search';
import SearchResult from './SearchResult';

function SearchPages() {
  return (
    <div className="searchPage">
      <div className="searchPageInfo">
        <h1>Stays neraby</h1>
        <Button variant="outlined">
          Cancellation Flexibility
        </Button>
        <Button variant="outlined">
          Type of place
        </Button>
        <Button variant="outlined">
          Price
        </Button>
        <Button variant="outlined">
          Rooms and beds
        </Button>
        <Button variant="outlined">
          More filters
        </Button>
      </div>
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/miso/Hosting-653600396561795371/original/5eed367f-a4f6-49d0-8c67-4e3f021ab3bd.jpeg?im_w=720"
        location="Bodrum"
        title="Villa Bodrum"
        description="Bodrum yalıkavak 3 beds"
        star={4.4}
        price="₺9.333 / night"
        total="₺18.000 total"

      />
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/miso/Hosting-653600396561795371/original/5eed367f-a4f6-49d0-8c67-4e3f021ab3bd.jpeg?im_w=720"
        location="Bodrum"
        title="Villa Bodrum"
        description="Bodrum yalıkavak 3 beds"
        star={4.4}
        price="₺9.333 / night"
        total="₺18.000 total"

      />
    </div>
    
  )
}

export default SearchPages
