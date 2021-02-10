import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../Actions";

const initialState = {
  deadline: '20',
  tolerance: 0.5,
  inputToken1: '',
  inputToken2: '',
  selectToken1: '',
  selectToken2: '',
  token1: {
    name: '',
    symbol: '',
    address: '',
    decimals: 0
  },
  token2: {
    name: '',
    symbol: '',
    address: '',
    decimals: 0
  },
  currentTrade: {},
  balance1: '',
  balance2: '',
  wallet: {},
  address: '',
  walletnetwork: 4,
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
