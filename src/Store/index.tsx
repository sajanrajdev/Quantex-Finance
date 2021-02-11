import React from "react";
import useGlobalHook from "use-global-hook";
import { RinkebyTokens } from '../Data/RinkbeyTokens'
import { initOnboard, initNotify } from '../Services/Blocknative'
import {ethers} from 'ethers'

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
  currentTrade: {
    route: {},
    tradeType: 0,
    inputAmount: '',
    outputAmount: '',
    executionPrice: '',
    nextMidPrice: '',
    priceImpact: ''
  },
  balance1: '',
  balance2: '',
  wallet: {},
  address: '',
  walletnetwork: 4,
  workingnetwork: 4,
  darkmode: true,
  tokenslist: RinkebyTokens,
  onboard: initOnboard({}),
  notify: initNotify(),
  provider: new ethers.providers.InfuraProvider('rinkeby', 'https://rinkeby.infura.io/v3/91887b08c32f490a81984a7a9a3da316') //Set infura as default provider
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
