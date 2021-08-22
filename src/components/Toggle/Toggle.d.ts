import {FunctionComponent} from "react";

import {BaseToggleProps} from "../BaseToggle/BaseToggle";

export interface ToggleProps extends BaseToggleProps {}

declare const Toggle: FunctionComponent<ToggleProps>;

export default Toggle;
