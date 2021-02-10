import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../Actions";

const initialState = {
  deadline: '20',
  tolerance: 0.5
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
