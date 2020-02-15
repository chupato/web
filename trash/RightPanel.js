import React from 'react';

import SpotMap from './SpotMap';

const style = {
  float:"left",
  width: "65%",
  overflow: "hidden"
}

export default React.createClass({
  render() {
    return (
      <div style={style}>
        <SpotMap />
        <div style={ { clear:"both" }} ></div>
      </div>
    );
  }
});