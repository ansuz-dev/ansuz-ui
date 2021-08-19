import React from "react";

import CheckBox from "./components/CheckBox/CheckBox";
import CheckRound from "./components/CheckRound/CheckRound";
import Radio from "./components/Radio/Radio";
import Toggle from "./components/Toggle/Toggle";
import StarToggle from "./components/StarToggle/StarToggle";

function App() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="space-x-4">
        <CheckBox
          labelFirst
          label="Check me"
        />
        <CheckRound
          label="Check me"
        />
      </div>
      <div className="space-x-4">
        <Radio
          labelFirst
          name="gender"
          label="Female"
        />
        <Radio
          name="gender"
          label="Male"
        />
      </div>
      <div className="space-x-4">
        <Toggle
          labelFirst
          label="Toggle me"
        />
        <Toggle
          labelFirst
          direction="vert"
          label="Toggle me"
        />
      </div>
      <div className="space-x-4">
        <StarToggle
          label="Toggle me"
        />
        <StarToggle
          direction="vert"
          label="Toggle me"
        />
      </div>
      <div className="space-x-4">
        <CheckBox
          labelFirst
          direction="vert"
          label="Check me"
        />
        <CheckRound
          direction="vert"
          label="Check me"
        />
      </div>
      <div className="space-x-4">
        <Radio
          labelFirst
          direction="vert"
          name="vehicle"
          label="Car"
        />
        <Radio
          direction="vert"
          name="vehicle"
          label="Bike"
        />
      </div>
    </div>
  );
}

export default App;
