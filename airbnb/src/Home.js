import React from 'react'
import "./Home.css"
import Banner from './Banner'
import Card from './Card'

function Home() {
  return (
    <div className="home">
     
      <Banner />

      <div className="homeSection">
          <Card 
              src="https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720"
              title="Badachro, Birleşik Krallık"
              description="3.260 km"
              price="₺3.700/night"
          />
          <Card
              src="https://a0.muscache.com/im/pictures/3cf5662b-8eed-40f6-ab9b-9637b6631610.jpg?im_w=720"
              title="special room - Göreme Belediyesi"
              description="Goat Cave Hotel 3 King beds"
              price="₺3.312/night"
              

          />
          <Card
              src="https://a0.muscache.com/im/pictures/0a21f857-3ca8-4daf-a3d5-c8ac479b4f8f.jpg?im_w=720"
              title="Private room - Kusadasi"
              description="Cabin rental on the boat 3 beds"
              price="₺525/night"
          />
  
      </div>
      <div className="homeSection">
          <Card 
            src="https://a0.muscache.com/im/pictures/10aa2c8c-f6e5-4e22-a942-935581afddf6.jpg?im_w=720"
            title="Bungalow - Aydınpınar"
            description="Magnificent wooden house 1+1"
            price="₺708/night"
          />
          <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-614831160938524814/original/16c6f19f-a094-4d2a-81bd-eeebdeedb947.jpeg?im_w=720"
              title="Boat - Kas"
              description="Kas Private Boat Tour 2 Double beds"
              price="₺14,582/night"
          />
          <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-675106476373222547/original/e4b65404-2476-4e18-a2c5-338e06959aa5.jpeg?im_w=720"
              title="Villa - Bodrum"
              description="New 3+1 villa for rent in a site with own beach 3 beds"
              price="₺2276/night"
          />
  
      </div>
    </div>
  )
}

export default Home
