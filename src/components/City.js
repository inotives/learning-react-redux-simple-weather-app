import React from 'react';
import {GoogleMapLoader, GoogleMap} from "react-google-maps";

const containerStyle = {
  height: "100%",
  position: 'relative'
}

const cityNameStyle = {
  position: 'absolute',
  zIndex: 1,
  right: 5,
  top: 5,
  color: '#454545',
  fontSize: 18
}

export default (props) => {
  return (
    <section style={containerStyle}>
      <strong className="label" style={cityNameStyle}>{props.name}</strong>
      <GoogleMapLoader
        containerElement={ <div style={{ height: "100%" }} /> }
        googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={{lat: props.lat, lng: props.lon}} />
        }
      />
    </section>
  );
}
