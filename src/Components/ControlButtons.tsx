import React, { useEffect } from 'react';
import { ButtonGroup, Button, Theme } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';
import { Fetcher, Trade, Route, TokenAmount, TradeType, Percent } from '@uniswap/sdk'
import useGlobal from "../Store";
import {ethers} from 'ethers'
import { toHex } from '../utils';

const useStyles = makeStyles((theme: Theme) => ({
    disabledButton: {
      backgroundColor: '#494d54',
    }
  }));

declare global {
  interface Window {
      ethereum:any;
  }
}

const WEI_TO_ETH = 1000000000000000000;

const ControlButtons = ({currentTrade, setCurrentTrade}:{currentTrade: Trade | undefined, setCurrentTrade: any}) => {

    const classes = useStyles();
    const [globalState, globalActions] = useGlobal();
    const actions: any = globalActions;

    let provider = globalState.provider;

  useEffect(() => { // Handler for change 
    if(globalState.arrowFlag){
      getPrice();
      actions.changeArrowFlag(false);
    }
  }, [globalState.arrowFlag]);

  // Handler for Price Estimate button
  const handleEstimatePriceButton = async () => {
    if(globalState.walletnetwork==globalState.workingnetwork) {
      var ExecutionPrice = await getPrice();
      if (ExecutionPrice) {
        actions.changeInputToken2((parseFloat(globalState.inputToken1)*parseFloat(ExecutionPrice)).toString());
      }
    }
    else{
      console.log("Please switch to Rinkeby network");
      alert("Please switch to Rinkeby network");
    }
  };

  // Verifies if wallet has already been selected and checks up
  const readyToTransact = async () => {
    if(globalState.onboard){
      if (!provider) {
        const walletSelected = await globalState.onboard.walletSelect();
        if (!walletSelected) return false;
      }
      const ready = await globalState.onboard.walletCheck();
      return ready;
    }
    else false;
  }

   // Get realtime price of token1 based on paired token2
  const getPrice = async () => {
    if(globalState.walletnetwork == globalState.workingnetwork){
      const tradetoken1 = await Fetcher.fetchTokenData(globalState.walletnetwork, ethers.utils.getAddress(globalState.token1.address), provider); 
      const tradetoken2 = await Fetcher.fetchTokenData(globalState.walletnetwork, ethers.utils.getAddress(globalState.token2.address), provider);
      const pair = await Fetcher.fetchPairData(tradetoken1, tradetoken2, provider);
      const route = new Route([pair], tradetoken1);
      const trade = new Trade(route, new TokenAmount(tradetoken1, (BigInt((parseFloat(globalState.inputToken1))*(WEI_TO_ETH))).toString()), TradeType.EXACT_INPUT);
      console.log("Execution Price:", trade.executionPrice.toSignificant(6));
      console.log("Mid Price:", route.midPrice.toSignificant(6));
      console.log("Next Mid Price:", trade.nextMidPrice.toSignificant(6));
      setCurrentTrade(trade);
      return trade.executionPrice.toSignificant(6);
    }
    else{
      console.log("Please switch to Rinkeby network");
    }
  }

  const performTrade = async () => {
    if(currentTrade != undefined && readyToTransact()){
      const slippageTolerance = new Percent((globalState.tolerance*100).toString(), '10000');
      const amountOutMin = toHex(currentTrade.minimumAmountOut(slippageTolerance).raw);
      const path = [ethers.utils.getAddress(globalState.token1.address), ethers.utils.getAddress(globalState.token2.address)];
      const to = globalState.address; // Sends to selected address on wallet
      const tradedeadline = Math.floor(Date.now() / 1000) + 60 * parseInt(globalState.deadline); // Maximum wait time for transaction (20min)
      const value = toHex(currentTrade.inputAmount.raw);
      const signer = provider.getSigner();

      var uniswap;
      var tx;

      if(globalState.token1.symbol == 'WETH' || globalState.token1.symbol == 'ETH'){
        uniswap = new ethers.Contract(ethers.utils.getAddress('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'), ['function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)'], signer);
        tx = await uniswap.swapExactETHForTokens(amountOutMin, path, to, tradedeadline, {value});
      }
      else if(globalState.token2.symbol == 'WETH' || globalState.token2.symbol == 'ETH'){
        uniswap = new ethers.Contract(ethers.utils.getAddress('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'), ['function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)'], signer);
        tx = await uniswap.swapExactTokensForETH(value, amountOutMin, path, to, tradedeadline);
      }
      else{
        uniswap = new ethers.Contract(ethers.utils.getAddress('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'), ['function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)'], signer);
        tx = await uniswap.swapExactTokensForTokens(value, amountOutMin, path, to, tradedeadline);
      }
      
      console.log('Transaction Hash:',tx.hash);

      if (globalState.notify != undefined){
        const { emitter } = globalState.notify.hash(tx.hash);
        emitter.on('txPool', (tx: any) => {
          return {
            onclick: () =>
              window.open(`https://rinkeby.etherscan.io/tx/${tx.hash}`)
          }
        });
        emitter.on('txSent', console.log);
        emitter.on('txConfirmed', console.log);
        emitter.on('txSpeedUp', console.log);
        emitter.on('txCancel', console.log);
        emitter.on('txFailed', console.log);
      }

      const receipt = await tx.wait();
      console.log("Transaction was mined in block:", receipt.blockNumber);
      actions.fetchBalance(provider, globalState.address, globalState.token1, 1);; // Sets new balane for Token1 after transaction
      actions.fetchBalance(provider, globalState.address, globalState.token2, 2);; // Sets new balane for Token1 after transaction
    }
    else{
      console.log("Current Trade not defined")
    }
  }  

  const isReadyToSwap = () => {
    if((globalState.inputToken2=='')||(globalState.inputToken1=='')||(globalState.deadline=='')||(globalState.walletnetwork==undefined)||(globalState.balance1==undefined)||(parseFloat(globalState.inputToken1)>parseFloat(globalState.balance1))){
      return false;
    }
    else {
      return true;
    }
  }  

      return (
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button name='Estimate' variant="contained" size="large" color="primary" disabled={(globalState.inputToken1=='')||(globalState.selectToken2=='')||(parseFloat(globalState.inputToken1)<=0)} onClick={handleEstimatePriceButton}>
              Estimate
            </Button>
            <Button name='Swap' variant="contained" size="large" color="primary" disabled={!isReadyToSwap()} onClick={performTrade}>
              Swap
            </Button>
          </ButtonGroup>
      );
  };

export default ControlButtons;