import React from 'react';
import SpotForm from './SpotForm';
import ActivityForm from './ActivityForm';
import state from "./state";
import apply from "style/apply";

const style = apply({
  float:"left",
  width: "35%",
  overflowY: "auto",
});

export default state(React.createClass({
  render() {
    return (
      <div style={style({height: this.props.view.h - 20})}>
        <SpotForm />
        <ActivityForm />
        <div style={ { clear:"both" }}/>
      </div>
    );
  }
}), ["view"]);