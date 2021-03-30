import React, { Component } from "react";
import "./Maps.css";
import GoogleMapReact from "google-map-react";

const MapsView = ({ text }) => (
  <div
    style={{
      position: "relative",
      color: "white",
      background: "red",
      height: 40,
      width: 60,
      top: -20,
      left: -30,
      textAlign: "center",
      paddingTop: "5px",
    }}
  >
    {text}
  </div>
);

export default class Maps extends Component {
  static defaultProps = {
    center: { lat: 17.4423, lng: 78.3758 },
    zoom: 11,
  };

  render() {
    return (
      <div className="container">
        <p>Google Map View</p>
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <MapsView lat={17.4423} lng={78.3758} text={"your location"} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
