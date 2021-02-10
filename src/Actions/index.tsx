import { Trade } from '@uniswap/sdk'
import { getERC20TokenBalance } from '../utils';
import {ethers} from 'ethers'  

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
    console.log(value);
    store.setState( { selectToken1: value } );
};

export const changeSelectToken2 = (store: any, value: string) => {
    console.log(value);
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

export const fetchBalance = async (store: any, provider: any, address: string | undefined, token1: any, tokenNumber: number) => {

    if(provider && address!=null){
      if(token1.symbol == 'WETH'){
        let ETHBalance = await provider.getBalance(address);
        if(tokenNumber==1){
            store.setState({balances1: ethers.utils.formatEther(ETHBalance)})
        }
        else if(tokenNumber==2){
            store.setState({balance2: ethers.utils.formatEther(ETHBalance)})
        }
      }
      else{
        let ERC20Balance = await getERC20TokenBalance(token1, address, provider);
        if(tokenNumber==1){
            store.setState({balance1: ERC20Balance});
        }
        else if(tokenNumber==2){
            store.setState({balance2: ERC20Balance});
        }
      }
    }
  };



