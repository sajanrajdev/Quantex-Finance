import { Trade } from '@uniswap/sdk'
import { getERC20TokenBalance } from '../utils';
import {ethers} from 'ethers'  
import { API } from "bnc-onboard/dist/src/interfaces";

interface TradeToken {
    name: string
    symbol: string
    address: string
    decimals: number
  }

export const changeDeadline = (store: any, event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value==''){
            store.setState( {deadline: ''} );
        }
        else{
            store.setState( {deadline: parseFloat(event.target.value).toFixed(0)} );
        }
  };

export const changeTolerance = (store: any, value: number) => {
    store.setState( { tolerance: value } );
};

export const changeInputToken1 = (store: any, value: string) => {
    store.setState( { inputToken1: value } );
};

export const changeInputToken2 = (store: any, value: string) => {
    store.setState( { inputToken2: value } );
};

export const changeSelectToken1 = (store: any, value: string) => {
    store.setState( { selectToken1: value } );
};

export const changeSelectToken2 = (store: any, value: string) => {
    store.setState( { selectToken2: value } );
};

export const changeToken1 = (store: any, value: TradeToken) => {
    store.setState( { token1: value } );
};

export const changeToken2 = (store: any, value: TradeToken) => {
    store.setState( { token2: value } );
};

export const changeCurrentTrade = (store: any, value: Trade) => {
    store.setState( { currentTrade: value } );
};

export const changeBalance1 = (store: any, value: string | undefined) => {
    store.setState( { balance1: value } );
};

export const changeBalance2 = (store: any, value: string | undefined) => {
    store.setState( { balance2: value } );
};

export const changeWallet = (store: any, value: any) => {
    store.setState( { wallet: value } );
};

export const changeAddress = (store: any, value: string) => {
    store.setState( { address: value } );
};

export const changeWalletNetwork = (store: any, value: number) => {
    store.setState( { walletnetwork: value } );
};

export const changeWorkingNetwork = (store: any, value: number) => {
    store.setState( { workingnetwork: value } );
};

export const changeDarkMode = (store: any, value: boolean) => {
    store.setState( { darkmode: value } );
};

export const changeArrowFlag = (store: any, value: boolean) => {
    store.setState( { arrowFlag: value } );
};

export const changeOnboard = (store: any, value: API) => {
    store.setState( { onboard: value } );
};

export const changeNotify = (store: any, value: any) => {
    store.setState( { notify: value } );
};

export const changeTokenList = (store: any, value: any | any[]) => {
    store.setState( { tokenslist: value } );
};

export const changeProvider = (store: any, value: any) => {
    store.setState( { provider: value } );
};


export const fetchBalance = async (store: any, provider: any, address: string | undefined, token: any, tokenNumber: number) => {

    if(provider && address!=null){
      if(token.symbol == 'WETH'){
        let ETHBalance = await provider.getBalance(address);
        if(tokenNumber==1){
            store.setState({balance1: ethers.utils.formatEther(ETHBalance)})
        }
        else if(tokenNumber==2){
            store.setState({balance2: ethers.utils.formatEther(ETHBalance)})
        }
      }
      else{
        let ERC20Balance = await getERC20TokenBalance(token, address, provider);
        if(tokenNumber==1){
            store.setState({balance1: ERC20Balance});
        }
        else if(tokenNumber==2){
            store.setState({balance2: ERC20Balance});
        }
      }
    }
  };

  


