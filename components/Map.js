import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

function Map(props) {
  const mapStyles = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: props.latitude,
    lng: props.longitude
  }

  return (
    <LoadScript googleMapsApiKey={'AIzaSyBP7bvd-lBWnGxTUBggBjAYLb6GJy6T9iU'}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={props.zoom}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
