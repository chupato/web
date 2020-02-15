import React from 'react';
import TextInput from "form/TextInput";
import Selection from "form/Selection";
import Form from "form";

export default React.createClass({
  render() {
    return (
      <Form name="Add an activity">
        <div>
          <TextInput name="Name" />
          <TextInput name="Subname" />
          <TextInput name="Location" />
        </div>
        <div>
          <Selection
            name="Type"
            options={ [ "Marine", "Submarine", "Terrestrial" ] }
          />
          <Selection
            name="Related Data"
            multiple={ true }
            options={ [
              "Wind",
              "Swell",
              "Rain",
              "Turbidity"
            ] }
          />
        </div>
      </Form>
    );
  }
});