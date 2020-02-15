import React from 'react';

import events from "event";
import Map from 'map/Map';
import Marker from 'map/Marker';
import Popup from 'map/Popup';
import TileLayer from 'map/TileLayer';
import State from "./state";

const dup = pos => [pos[0], pos[1]];

export default State(React.createClass({
  handleClick(event) {
    console.log(event);
    State.spot.set({
      pos: [event.latlng.lat, event.latlng.lng]
    });
  },
  componentWillMount() {
    this.setState({ center: this.props.spot.pos });
  },
  componentDidMount() {
    const map = this.refs.spotMap.getLeafletElement();
    this.setState({ map });
    map.on("click", this.handleClick);
  },
  getInitialState() {
    return {
      height: 100,
      map: null
    };
  },
  render() {
    let mark = <Marker position={this.props.spot.pos} />;
    console.log("render map", this.state.height);
    return (
      <Map
        center={this.state.center}
        zoom={11}
        style={{height: this.props.view.h - 20}}
        ref="spotMap">

        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
        <Marker position={ dup(this.props.spot.pos) } />
      </Map>
    );
  }
}), ["spotList", "spot", "view"]);