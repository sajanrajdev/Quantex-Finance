import React, { useEffect, useState } from "react";
import useGlobal from "./Store";
import { Fetcher, Trade, Route, TokenAmount, TradeType, Percent } from '@uniswap/sdk'
import TopAppBar from './Components/AppBar'
import { getTokenBySymbol, toHex, spliceNoMutate, fetchBalance } from './utils';
import { TextField, MenuItem, Button, ButtonGroup, OutlinedInput, InputAdornment } from '@material-ui/core';
import { Paper, CircularProgress, Grid, Box, Slider, Typography, CssBaseline, Container, InputBase, Theme, Select  } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import {ethers} from 'ethers'
import { initOnboard, initNotify } from './Services/Blocknative'
import { API } from "bnc-onboard/dist/src/interfaces";
import { RinkebyTokens } from './Data/RinkbeyTokens'
import BalanceButton from './Components/BalanceButton'
import Background from './Assets/background-green.jpg';


interface TradeToken {
  name: string
  symbol: string
  address: string
  decimals: number
}

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
      // Use the system font instead of the default Roboto font.
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
let ethereum = window.ethereum;

function App() {

  const [globalState, globalActions] = useGlobal();
  
  const [tokenslist, setTokensList] = useState<any | any[]>(RinkebyTokens);
  const [token1, settoken1] = useState<TradeToken>({name: "", symbol: "", address: "", decimals: 0});
  const [token2, settoken2] = useState<TradeToken>({name: "", symbol: "", address: "", decimals: 0});
  const [selectToken1, setSelectToken1] = useState('');
  const [selectToken2, setSelectToken2] = useState('');
  const [inputToken1, setInputToken1] = useState('');
  const [inputToken2, setInputToken2] = useState('');
  const [currentTrade, setCurrentTrade] = useState<Trade>();
  const [tolerance, setTolerance] = useState<any>(0.5);
/*   const [deadline, setDeadline] = useState<string>('20'); */
  const [gasprice, setGasPrice] = useState<string>('20');

  const [darkmode, setDarkMode] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const [address, setAddress] = useState<string>();
  const [walletnetwork, setWalletNetwork] = useState<number>();
  const [balance1, setBalance1] = useState<any>();
  const [balance2, setBalance2] = useState<any>();
  const [wallet, setWallet] = useState({});

  const [onboard, setOnboard] = useState<API>()
  const [notify, setNotify] = useState<any>()

  const NETWORK_ID = 4; // Working network, to be selectable in the future (Mainnet 1, Ropsten 3 and Rinkeby 4)
  const WEI_TO_ETH = 1000000000000000000;

  const themeDark = createMuiTheme({
    palette: {
      primary: {main: '#24806c'},
      secondary: {main: "#181a1c"},
      background: {
        default: "#222222",
        paper: "#222222",
      },
      text: {
        primary: "#ffffff"
      }
    },
    typography: {
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  
  const classes = useStyles(); 

  // On Mount 
  useEffect(() => {
    const onboard = initOnboard({
      address: setAddress,
      network: setWalletNetwork,
      wallet: (wallet: any) => {
        if (wallet.provider) {
          setWallet(wallet)

          const ethersProvider = new ethers.providers.Web3Provider(
            wallet.provider
          )

          provider = ethersProvider

          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          provider = null
          setWallet({})
        }
      }
    })

    console.log(globalState.deadline)
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
    fetchBalance(provider, address, token1, setBalance1);
  }, [token1]);

  // Fetch balance of selected Token2
  useEffect(() => {
    fetchBalance(provider, address, token2, setBalance2);
  }, [token2]);

    // Fetch balance of selected Token2
    useEffect(() => {
      console.log(globalState.deadline)
    }, [globalState.deadline]);

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
      if(walletnetwork == NETWORK_ID){
        setLoading(true);
        const tradetoken1 = await Fetcher.fetchTokenData(walletnetwork, ethers.utils.getAddress(token1.address), provider); 
        const tradetoken2 = await Fetcher.fetchTokenData(walletnetwork, ethers.utils.getAddress(token2.address), provider);
        const pair = await Fetcher.fetchPairData(tradetoken1, tradetoken2, provider);
        const route = new Route([pair], tradetoken1);
        const trade = new Trade(route, new TokenAmount(tradetoken1, (BigInt((parseFloat(inputToken1))*(WEI_TO_ETH))).toString()), TradeType.EXACT_INPUT);
        console.log("Execution Price:", trade.executionPrice.toSignificant(6));
        console.log("Mid Price:", route.midPrice.toSignificant(6));
        console.log("Next Mid Price:", trade.nextMidPrice.toSignificant(6));
        setCurrentTrade(trade);
        setLoading(false);
        return trade.executionPrice.toSignificant(6);
      }
      else{
        console.log("Please switch to Rinkeby network");
      }
    }
  
    const performTrade = async () => {
      if(currentTrade != undefined && readyToTransact()){
        const slippageTolerance = new Percent((tolerance*100).toString(), '10000');
        const amountOutMin = toHex(currentTrade.minimumAmountOut(slippageTolerance).raw);
        const path = [ethers.utils.getAddress(token1.address), ethers.utils.getAddress(token2.address)];
        const to = address; // Sends to selected address on wallet
        const tradedeadline = Math.floor(Date.now() / 1000) + 60 * parseInt(globalState.deadline); // Maximum wait time for transaction (20min)
        const value = toHex(currentTrade.inputAmount.raw);
        const signer = provider.getSigner();

        var uniswap;
        var tx;

        if(token1.symbol == 'WETH' || token1.symbol == 'ETH'){
          uniswap = new ethers.Contract(ethers.utils.getAddress('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'), ['function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)'], signer);
          tx = await uniswap.swapExactETHForTokens(amountOutMin, path, to, tradedeadline, {value});
        }
        else if(token2.symbol == 'WETH' || token2.symbol == 'ETH'){
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
        fetchBalance(provider, address, token1, setBalance1); // Sets new balane for Token1 after transaction
        fetchBalance(provider, address, token2, setBalance2); // Sets new balane for Token1 after transaction
      }
      else{
        console.log("Current Trade not defined")
      }
    }  

  // Handler for Token 1 Selector
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectToken1(event.target.value);
    var token_temp = getTokenBySymbol(tokenslist, event.target.value);
    settoken1({name: token_temp.name, symbol: token_temp.symbol, address: token_temp.id, decimals: token_temp.decimals});
    setInputToken1('');
    setInputToken2('');
  };

  // Handler for Token 1 Input
  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputToken1(event.target.value);
    setInputToken2('');
  };

  // Handler for Token 2 Selector
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectToken2(event.target.value);
    var token_temp = getTokenBySymbol(tokenslist, event.target.value);
    settoken2({name: token_temp.name, symbol: token_temp.symbol, address: token_temp.id, decimals: token_temp.decimals});
    setInputToken1('');
    setInputToken2('');
  };

  // Handler for Price Estimate button
  const handleEstimatePriceButton = async () => {
    if(walletnetwork==NETWORK_ID) {
      var ExecutionPrice = await getPrice();
      if (ExecutionPrice) {
        setInputToken2((parseFloat(inputToken1)*parseFloat(ExecutionPrice)).toString());
      }
    }
    else{
      console.log("Please switch to Rinkeby network");
      alert("Please switch to Rinkeby network");
    }
  };

  // Handler to interact with Darkmode switch and store its values
  const handleDarkModeSwitch = (newValue: boolean) => {
    setDarkMode(newValue)
  }

  const isReadyToSwap = () => {
    if((inputToken2=='')||(globalState.deadline=='')||(gasprice=='')||(walletnetwork==undefined)||(balance1==undefined)||(parseFloat(inputToken1)>parseFloat(balance1))){
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
        <TopAppBar address={address} onboard={onboard} network={walletnetwork} onChange={handleDarkModeSwitch} darkmode={darkmode}></TopAppBar>
        <br/>
        <br/>
        <Container>
          
        <Grid container spacing={6} direction={'column'} alignItems={'center'}>
          
          <Grid item xs={12}>          
            <Paper className={classes.paper} elevation={3} style={{width: 550, height: 150}}>
              <Grid container spacing={2} direction={'column'} alignItems={'center'} justify={'flex-start'}> 
              
                  <Grid item container spacing={2} direction={'row'} alignItems={'center'} justify={'flex-end'}>
                    <Grid item>
                      {balance1 ? `Balance: ${(parseFloat(balance1)).toFixed(6).toString()} ${token1.symbol}` : 'Balance:'}
                    </Grid> 
                    <Grid item>
                      <BalanceButton balance={balance1} selectToken1={selectToken1} wallet={wallet} setInputToken1={setInputToken1} setInputToken2={setInputToken2}></BalanceButton>
                    </Grid>
                  </Grid>

                <Grid item container spacing={3} direction={'row'} justify={'center'} alignItems={'center'}>
                  <Grid item>
                    <Select input={<TokenSelector />} inputProps={{ "data-testid": "Select1" }} placeholder="Token" value={selectToken1} style = {{width: 230}} onChange={handleChange1} variant="outlined">
                      {(spliceNoMutate(tokenslist, selectToken2)).map((option: any | any[]) => (
                        <MenuItem key={option.id} value={option.symbol}>
                          {option.symbol}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item>
                    <OutlinedInput inputProps={{ "data-testid": "Input1" }} className={classes.input} placeholder="0.0" value={inputToken1} style = {{width: 230}} color="primary" onChange={handleInputChange1} type="number" error={parseFloat(inputToken1)<=0}
                      endAdornment={<InputAdornment className={classes.inputAdorment} position="end">{token1.symbol}</InputAdornment>}/>
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
                    {balance2 ? `Balance: ${(parseFloat(balance2)).toFixed(6).toString()} ${token2.symbol}` : 'Balance:'}
                  </Grid> 
                </Grid>

                <Grid item container spacing={3} direction={'row'} justify={'center'} alignItems={'center'}>
                  <Grid item>
                    <Select input={<TokenSelector />} inputProps={{ "data-testid": "Select2" }} label="Token" value={selectToken2} style = {{width: 230}} onChange={handleChange2} variant="outlined">
                      {(spliceNoMutate(tokenslist, selectToken1)).map((option: any | any[]) => (
                        <MenuItem key={option.id} value={option.symbol}>
                          {option.symbol}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item>
                  <OutlinedInput inputProps={{ "data-testid": "Input2" }} className={classes.input}  placeholder="0.0" value={inputToken2} style = {{width: 230}} color="primary" type="number"
                      endAdornment={<InputAdornment className={classes.inputAdorment} position="end">{token2.symbol}</InputAdornment>}/>
                  </Grid>
                </Grid> 

              </Grid>
            </Paper>
          </Grid>

            <Grid item>   
            <ButtonGroup disableElevation variant="contained" color="primary" className={classes.disabledButton} >
              <Button name='Estimate' variant="contained" size="large" color="primary" disabled={(inputToken1=='')||(selectToken2=='')||(parseFloat(inputToken1)<=0)} onClick={handleEstimatePriceButton}>
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
