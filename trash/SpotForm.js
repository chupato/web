import React from 'react';
import TextInput from "form/TextInput";
import Selection from "form/Selection";
import Switch from "form/Switch";
import Form from "form";
import state from "./state";

const truncateDecimals = f => ~~(f * 10000) / 10000;

const Spot = state(React.createClass({
  posChange(idx, event) {
    const val = parseFloat(event.target.value);
    if (!isNaN(val) && typeof val === "number") {
      state.spot.set(spot => {
        spot.pos[idx] = event.target.value;
        return spot;
      });
    }
    return false;
  },
  handleLng(event) { return this.posChange(0, event) },
  handleLat(event) { return this.posChange(1, event) },
  getValue() { return this.props.spot.pos },
  render() {
    console.log("render spot form")
    return (
      <div>
        <TextInput
          name="longitude"
          ref="lng"
          onChange={ this.handleLng }
          value={ truncateDecimals(this.props.spot.pos[0]) } />
        <TextInput
          name="latitude"
          ref="lat"
          onChange={ this.handleLat }
          value={ truncateDecimals(this.props.spot.pos[1]) } />
      </div>
    );
  }
}), ["spot"]);

export default React.createClass({
  render() {
    return (
      <Form name="Add a spot">
        <TextInput name="Name" />
        <Spot />
        <div>
          <Switch name="Lagoon" />
          <Switch name="Beach" />
          <Switch name="Rip" />
          <Switch name="Coral Reef" />
        </div>
        <div>
          <Selection
            name="Infrastructure"
            multiple={ true }
            options={["Showers", "Toilets", "Parking", "Lifeguards"]}
          />
          <Selection
            name="Terrains"
            multiple={ true }
            options={[ "Sand", "Pebble", "Rock" ]}
          />
        </div>
      </Form>
    );
  }
});
