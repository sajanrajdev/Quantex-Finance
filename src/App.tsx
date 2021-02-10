import React, { useEffect, useState } from "react";
import useGlobal from "./Store";
import { Fetcher, Trade, Route, TokenAmount, TradeType, Percent } from '@uniswap/sdk'
import TopAppBar from './Components/AppBar'
import { getTokenBySymbol, toHex, spliceNoMutate } from './utils';
import { MenuItem, Button, ButtonGroup, OutlinedInput, InputAdornment } from '@material-ui/core';
import { Paper, Grid, CssBaseline, Container, InputBase, Theme, Select  } from '@material-ui/core';
import { ThemeProvider, makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import {ethers} from 'ethers'
import { initOnboard, initNotify } from './Services/Blocknative'
import { API } from "bnc-onboard/dist/src/interfaces";
import { RinkebyTokens } from './Data/RinkbeyTokens'
import BalanceButton from './Components/BalanceButton'
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
  paper: {
    borderRadius: 26,
    background: '#040404',
    border: 0,
    height: 48,
    padding: '0 30px',
    square: false
  },
  input: {
    borderRadius: 20,
    backgroundColor: '#181a1c',
    border: '1px solid #ffffff',
    fontSize: 25,
    padding: '2px 10px 2px 3px',
    '&:focus': {
      borderRadius: 20,
      borderColor: '#ffffff',
      backgroundColor: '#181a1c',
      boxShadow: '0 0 0 0.2rem rgba(36,128,108)',
    },
  },
  inputAdorment: {
    color: '#ffffff'
  },
  disabledButton: {
    backgroundColor: '#494d54',
  }
}));

const TokenSelector = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: theme.palette.secondary.main,
      border: '1px solid #ffffff',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 30,
        borderColor: '#ffffff',
        backgroundColor: theme.palette.secondary.main,
        boxShadow: '0 0 0 0.2rem rgba(36,128,108)',
      },
      '&:before': {
        color: '#ffffff'
      },
    },
  }),
)(InputBase);

let provider: any;

function App() {

  const [globalState, globalActions] = useGlobal();
  const actions: any = globalActions;
  
  const [tokenslist, setTokensList] = useState<any | any[]>(RinkebyTokens);
  const [currentTrade, setCurrentTrade] = useState<Trade>();
  const [onboard, setOnboard] = useState<API>()
  const [notify, setNotify] = useState<any>()

  const NETWORK_ID = 4; // Working network, to be selectable in the future (Mainnet 1, Ropsten 3 and Rinkeby 4)
  const WEI_TO_ETH = 1000000000000000000;

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

          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          provider = null
          actions.changeWallet({})
        }
      }
    })

    setOnboard(onboard);
    setNotify(initNotify())
  }, []);

  // Initializes a previously connected wallet
  useEffect(() => {
    const previouslySelectedWallet = window.localStorage.getItem(
      'selectedWallet'
    )
    if (previouslySelectedWallet && onboard) {
      onboard.walletSelect(previouslySelectedWallet)
    }
  }, [onboard]);

  // Fetch balance of selected Token1
  useEffect(() => {
    actions.fetchBalance(provider, globalState.address, globalState.token1, 1);
  }, [globalState.token1]);

  // Fetch balance of selected Token2
  useEffect(() => {
    actions.fetchBalance(provider, globalState.address, globalState.token2, 2);
  }, [globalState.token2]);

  // Verifies if wallet has already been selected and checks up
  const readyToTransact = async () => {
    if(onboard){
      if (!provider) {
        const walletSelected = await onboard.walletSelect();
        if (!walletSelected) return false;
      }
      const ready = await onboard.walletCheck();
      return ready;
    }
    else false;
  }

    // Get realtime price of token1 based on paired token2
    const getPrice = async () => {
      if(globalState.walletnetwork == NETWORK_ID){
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
  
        if (notify != undefined){
          const { emitter } = notify.hash(tx.hash);
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

  // Handler for Token 1 Selector
  const handleChange1 = (event: any) => {
    actions.changeSelectToken1(event.target.value);
    var token_temp = getTokenBySymbol(tokenslist, event.target.value);
    actions.changeToken1({name: token_temp.name, symbol: token_temp.symbol, address: token_temp.id, decimals: token_temp.decimals});
    actions.changeInputToken1('');
    actions.changeInputToken2('');
  };

  // Handler for Token 1 Input
  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    actions.changeInputToken1(event.target.value);
    actions.changeInputToken2('');
  };

  // Handler for Token 2 Selector
  const handleChange2 = (event: any) => {
    actions.changeSelectToken2(event.target.value);
    var token_temp = getTokenBySymbol(tokenslist, event.target.value);
    actions.changeToken2({name: token_temp.name, symbol: token_temp.symbol, address: token_temp.id, decimals: token_temp.decimals});
    actions.changeInputToken1('');
    actions.changeInputToken2('');
  };

  // Handler for Price Estimate button
  const handleEstimatePriceButton = async () => {
    if(globalState.walletnetwork==NETWORK_ID) {
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

  const isReadyToSwap = () => {
    if((globalState.inputToken2=='')||(globalState.deadline=='')||(globalState.walletnetwork==undefined)||(globalState.balance1==undefined)||(parseFloat(globalState.inputToken1)>parseFloat(globalState.balance1))){
      return false;
    }
    else {
      return true;
    }
  }  
  
  return (
    <ThemeProvider theme={themeDark}>
      <div className={classes.root} data-testid="App">
        <CssBaseline />
        <TopAppBar onboard={onboard}></TopAppBar>
        <br/>
        <br/>
        <Container>
          
        <Grid container spacing={6} direction={'column'} alignItems={'center'}>
          
          <Grid item xs={12}>          
            <Paper className={classes.paper} elevation={3} style={{width: 550, height: 150}}>
              <Grid container spacing={2} direction={'column'} alignItems={'center'} justify={'flex-start'}> 
              
                  <Grid item container spacing={2} direction={'row'} alignItems={'center'} justify={'flex-end'}>
                    <Grid item>
                      {globalState.balance1 ? `Balance: ${(parseFloat(globalState.balance1)).toFixed(6).toString()} ${globalState.token1.symbol}` : 'Balance:'}
                    </Grid> 
                    <Grid item>
                      <BalanceButton ></BalanceButton>
                    </Grid>
                  </Grid>

                <Grid item container spacing={3} direction={'row'} justify={'center'} alignItems={'center'}>
                  <Grid item>
                    <Select input={<TokenSelector />} inputProps={{ "data-testid": "Select1" }} placeholder="Token" value={globalState.selectToken1} style = {{width: 230}} onChange={handleChange1} variant="outlined">
                      {(spliceNoMutate(tokenslist, globalState.selectToken2)).map((option: any | any[]) => (
                        <MenuItem key={option.id} value={option.symbol}>
                          {option.symbol}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item>
                    <OutlinedInput inputProps={{ "data-testid": "Input1" }} className={classes.input} placeholder="0.0" value={globalState.inputToken1} style = {{width: 230}} color="primary" onChange={handleInputChange1} type="number" error={parseFloat(globalState.inputToken1)<=0}
                      endAdornment={<InputAdornment className={classes.inputAdorment} position="end">{globalState.token1.symbol}</InputAdornment>}/>
                  </Grid>
                </Grid> 

              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>          
            <Paper className={classes.paper} elevation={3} style={{width: 550, height: 150}}>
              <Grid container spacing={3} direction={'column'} alignItems={'center'} justify={'flex-start'}>

                <Grid item container spacing={2} direction={'row'} alignItems={'center'} justify={'flex-end'}>
                  <Grid item>
                    {globalState.balance2 ? `Balance: ${(parseFloat(globalState.balance2)).toFixed(6).toString()} ${globalState.token2.symbol}` : 'Balance:'}
                  </Grid> 
                </Grid>

                <Grid item container spacing={3} direction={'row'} justify={'center'} alignItems={'center'}>
                  <Grid item>
                    <Select input={<TokenSelector />} inputProps={{ "data-testid": "Select2" }} label="Token" value={globalState.selectToken2} style = {{width: 230}} onChange={handleChange2} variant="outlined">
                      {(spliceNoMutate(tokenslist, globalState.selectToken1)).map((option: any | any[]) => (
                        <MenuItem key={option.id} value={option.symbol}>
                          {option.symbol}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item>
                  <OutlinedInput inputProps={{ "data-testid": "Input2" }} className={classes.input}  placeholder="0.0" value={globalState.inputToken2} style = {{width: 230}} color="primary" type="number"
                      endAdornment={<InputAdornment className={classes.inputAdorment} position="end">{globalState.token2.symbol}</InputAdornment>}/>
                  </Grid>
                </Grid> 

              </Grid>
            </Paper>
          </Grid>

            <Grid item>   
            <ButtonGroup disableElevation variant="contained" color="primary" className={classes.disabledButton} >
              <Button name='Estimate' variant="contained" size="large" color="primary" disabled={(globalState.inputToken1=='')||(globalState.selectToken2=='')||(parseFloat(globalState.inputToken1)<=0)} onClick={handleEstimatePriceButton}>
                Estimate
              </Button>
              <Button name='Swap' variant="contained" size="large" color="primary" disabled={!isReadyToSwap()} onClick={performTrade}>
                Swap
              </Button>
            </ButtonGroup>
          </Grid>

        </Grid>

        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
