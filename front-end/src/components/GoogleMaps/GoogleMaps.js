import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'


function Map(){
    return(
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat: 33.748997, lng: -84.387985}} 
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function GoogleMaps(){
    return (
            <div style={{width: '70vw', height: '70vh' }}>
                <WrappedMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCwF2Al4VfsMZ0ZrWe8u4ThtTtbUPC9rRA`}
                    loadingElement={<div style={{height: "100%"}}/>}
                    containerElement={<div style={{height: "100%"}}/>}
                    mapElement={<div style={{height: "100%"}}/>}
                />
            </div>
    )
}

