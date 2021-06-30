import React from 'react'
import env from 'react-dotenv'
require ('dotenv').config()

export default function Main(props: any) {
  return (
    <div>
      <button className="find-button" onClick={props.getLocation}> Help me find where I am</button>
        {/* <h4>Coordinates</h4>
        <p>Latitude: {props.latitude}</p>
        <p>Longitude: {props.longitude}</p> */}
        <h4>Google Maps</h4>
        <p className="address">Address: {props.userAddress}</p>
        {
          props.latitude && props.longitude ? 
          <img src={`https://maps.googleapis.com/maps/api/staticmap?size=520x520&maptype=roadmap\&markers=anchor:bottomright|${props.latitude},${props.longitude}|&markers=size:mid%7Ccolor:green%7C39.76275935942358,-105.01151411001224|&markers=size:mid%7Ccolor:blue%7C39.75047743094735,-105.00001006412279|&markers=size:mid%7Ccolor:orange%7C39.7559,-104.9942|&markers=size:mid%7Ccolor:yellow%7C39.75278703400433,-105.02406411391861|&key=${process.env.GOOGLE_API_KEY}`} alt={'map of coordinates'}/> 
          : null
        }
    </div>
  )
}
