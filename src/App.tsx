import React, { useEffect, useState } from "react";
import useGlobal from "./Store";
import { Trade } from '@uniswap/sdk'
import TopAppBar from './Components/AppBar'
import { CssBaseline, Container } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {ethers} from 'ethers'
import { initOnboard, initNotify } from './Services/Blocknative'
import SwapForm from './Components/SwapForm'
import Background from './Assets/background-green.jpg';
import themeDark from './Themes/darkTheme'

declare global {
  interface Window {
      ethereum:any;
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

let provider: any;

function App() {

  const [globalState, globalActions] = useGlobal();
  const actions: any = globalActions;
  
  const [currentTrade, setCurrentTrade] = useState<Trade>();

  const NETWORK_ID = 4; // Working network, to be selectable in the future (Mainnet 1, Ropsten 3 and Rinkeby 4)

  const classes = useStyles(); 

  // On Mount 
  useEffect(() => {
    const onboard = initOnboard({
      address: (address: string)  => actions.changeAddress(address),
      network: (network: string)  => actions.changeWalletNetwork(network),
      wallet: (wallet: any) => {
        if (wallet.provider) {
          actions.changeWallet(wallet)

          const ethersProvider = new ethers.providers.Web3Provider(
            wallet.provider
          )

          provider = ethersProvider
          actions.changeProvider(provider)

          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          provider = null
          actions.changeWallet({})
        }
      }
    })

    actions.changeWorkingNetwork(NETWORK_ID);
    actions.changeOnboard(onboard);
    actions.changeNotify(initNotify());
  }, []);

  // Initializes a previously connected wallet
  useEffect(() => {
    const previouslySelectedWallet = window.localStorage.getItem(
      'selectedWallet'
    )
    if (previouslySelectedWallet && globalState.onboard) {
      globalState.onboard.walletSelect(previouslySelectedWallet)
    }
  }, [globalState.onboard]);

  // Fetch balance of selected Token1
  useEffect(() => {
    actions.fetchBalance(provider, globalState.address, globalState.token1, 1);
  }, [globalState.token1]);

  // Fetch balance of selected Token2
  useEffect(() => {
    actions.fetchBalance(provider, globalState.address, globalState.token2, 2);
  }, [globalState.token2]);
  
  return (
    <ThemeProvider theme={themeDark}>
      <div className={classes.root} data-testid="App">
        <CssBaseline />
        <TopAppBar onboard={globalState.onboard}></TopAppBar>
        <br/>
        <br/>
        <Container>
          <br/>
          <SwapForm currentTrade={currentTrade} setCurrentTrade={setCurrentTrade}/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
