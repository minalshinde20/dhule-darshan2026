import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader } from "@googlemaps/js-api-loader"

function Map() {
    // const loader = new Loader({
    //     apiKey: "YOUR_API_KEY",
    //     version: "weekly",
    //     ...additionalOptions,
    //   });
      
    //   loader.load().then(async () => {
    //     const { Map } = await google.maps.importLibrary("maps");
      
    //     map = new Map(document.getElementById("map"), {
    //       center: { lat: -34.397, lng: 150.644 },
    //       zoom: 8,
    //     });
    //   });
    const location = useLocation();
    const [Name,setName]= useState('')
    useEffect(()=>{
        setName(location.state.Name)
        
    },[])
  return (
    <div>{Name}</div>
  )
}

export default Map