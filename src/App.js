import React from "react";

import CheckBox from "./components/CheckBox/CheckBox";
import CheckRound from "./components/CheckRound/CheckRound";
import Radio from "./components/Radio/Radio";
import Toggle from "./components/Toggle/Toggle";
import StarToggle from "./components/StarToggle/StarToggle";
import Tooltip from "./components/Tooltip/Tooltip";

import Button from "./components/Button/Button";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="space-x-4">
        <Tooltip
          title="It is a long established fact that a reader."
        >
          <CheckBox
            labelFirst
            label="Check me"
          />
        </Tooltip>
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
        <Tooltip
          title="It is a long established fact that a reader."
        >
          <Toggle
            labelFirst
            direction="vert"
            label="Toggle me"
          />
        </Tooltip>
      </div>
      <div className="space-x-4">
        <StarToggle
          label="Toggle me"
        />
        <Tooltip
          title="It is a long established fact that a reader."
        >
          <StarToggle
            direction="vert"
            label="Toggle me"
          />
        </Tooltip>
      </div>
      <div className="space-x-4">
        <CheckBox
          labelFirst
          direction="vert"
          label="Check me"
        />
        <Tooltip
          title="It is a long established fact that a reader."
        >
          <CheckRound
            direction="vert"
            label="Check me"
          />
        </Tooltip>
      </div>
      <div className="space-x-4">
        <Radio
          labelFirst
          direction="vert"
          name="vehicle"
          label="Car"
        />
        <Tooltip
          title="It is a long established fact that a reader."
        >
          <Radio
            direction="vert"
            name="vehicle"
            label="Bike"
          />
        </Tooltip>
      </div>
      <div className="space-x-4">
        <Tooltip
          title="It is a long established fact that a reader."
        >
          <span>Hover</span>
        </Tooltip>
        <Tooltip
          title="It is a long established fact that a reader will be distracted."
        >
          <span>Hover me</span>
        </Tooltip>
        <Tooltip
          title="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        >
          <span>Hover me long</span>
        </Tooltip>
      </div>
      <div className="space-x-4">
        <Button>
          Click me
        </Button>
        <Button variant="outlined">
          Click me
        </Button>
        <Button color="secondary">
          Click me
        </Button>
        <Button color="secondary" variant="outlined">
          Click me
        </Button>
      </div>

      <div className="space-x-4">
        <Button loading>
          Click me
        </Button>
        <Button loading variant="outlined">
          Click me
        </Button>
        <Button loading color="secondary">
          Click me
        </Button>
        <Tooltip title="A button">
          <Button loading color="secondary" variant="outlined">
            Click me
          </Button>
        </Tooltip>
      </div>

      <div className="space-x-4">
        <Loading />
        <Loading color="secondary" />
      </div>
    </div>
  );
}

export default App;
