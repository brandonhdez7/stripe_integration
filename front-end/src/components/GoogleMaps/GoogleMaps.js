import React from 'react'
import {GoogleMap} from 'react-google-maps'


function Map(){
    return(
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat: 33.748997, lng: -84.387985}} 
        />
    )
}

export default function CoffeeMap(){
    return <div>map here </div>
}

