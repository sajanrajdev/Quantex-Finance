import useGlobal from "../Store";
import { Grid, Paper, Select, FormControl, FormHelperText, InputLabel, OutlinedInput, MenuItem, InputAdornment, Theme, InputBase } from '@material-ui/core';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { Trade } from '@uniswap/sdk'
import BalanceButton from './BalanceButton'
import ControlButtons from './ControlButtons'
import ArrowButton from './ArrowButton'
import { getTokenBySymbol, spliceNoMutate } from '../utils';

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: 26,
    background: theme.palette.background.paper,
    border: 0,
    height: 48,
    padding: '0 30px',
    square: false
  },
  input: {
    borderRadius: 20,
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.type == 'dark' ? '#ffffff' : '#000000'}`,//'1px solid #ffffff',
    fontSize: 25,
    padding: '2px 10px 2px 3px',
    '&:focus': {
      borderRadius: 20,
      borderColor: '#ffffff',
      backgroundColor: theme.palette.secondary.main,
      boxShadow: `0 0 0 0.2rem ${theme.palette.primary.main}`//'0 0 0 0.2rem rgba(36,128,108)',
    },
  },
  inputAdorment: {
    color: '#ffffff',
    fontWeight: 'bold'
  },
  formtext: {
    color: '#ffffff',
    fontSize: 10,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const TokenSelector = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 30,
      backgroundColor: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.type == 'dark' ? '#ffffff' : '#000000'}`,
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 30,
        borderColor: '#ffffff',
        backgroundColor: theme.palette.secondary.main,
        boxShadow: `0 0 0 0.2rem ${theme.palette.primary.main}`,
      },
      '&:before': {
        color: '#ffffff'
      },
    },
  }),
)(InputBase);


export default function SwapForm({currentTrade, setCurrentTrade}:{currentTrade: Trade | undefined, setCurrentTrade: any}) {

  const classes = useStyles();

  const [globalState, globalActions] = useGlobal();
  const actions: any = globalActions;

  // Handler for Token 1 Selector
  const handleChange1 = (event: any) => {
    actions.changeSelectToken1(event.target.value);
    var token_temp = getTokenBySymbol(globalState.tokenslist, event.target.value);
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
    var token_temp = getTokenBySymbol(globalState.tokenslist, event.target.value);
    actions.changeToken2({name: token_temp.name, symbol: token_temp.symbol, address: token_temp.id, decimals: token_temp.decimals});
    actions.changeInputToken1('');
    actions.changeInputToken2('');
  };

  return (
    <Grid container spacing={6} direction={'column'} alignItems={'center'}>
      <Grid container spacing={0} direction={'column'} alignItems={'center'}>
        
        <Grid item xs={12}>          
          <Paper className={classes.paper} elevation={3} style={{width: 550, height: 150}}>
            <Grid container spacing={2} direction={'column'} alignItems={'center'} justify={'flex-start'}> 
            
              <Grid item container spacing={1} direction={'row'} alignItems={'center'} justify={'flex-start'}>

                <Grid item xs={1}>
                  <b>From</b>
                </Grid>
                <Grid item xs={11} container spacing={2} direction={'row'} alignItems={'center'} justify={'flex-end'}>
                  <Grid item>
                    {globalState.balance1 ? `Balance: ${(parseFloat(globalState.balance1)).toFixed(6).toString()} ${globalState.token1.symbol}` : 'Balance:'}
                  </Grid> 
                  <Grid item>
                    <BalanceButton ></BalanceButton>
                  </Grid>
                </Grid>

              </Grid>

              <Grid item container spacing={3} direction={'row'} justify={'center'} alignItems={'center'}>
                <Grid item>
                <FormControl>  
                  <InputLabel id="demo-customized-select-label">&nbsp;&nbsp;Select a Token</InputLabel>
                  <Select input={<TokenSelector />} inputProps={{ "data-testid": "Select1" }} placeholder="Token" value={globalState.selectToken1} style = {{width: 230}} onChange={handleChange1} variant="outlined">
                    {(spliceNoMutate(globalState.tokenslist, globalState.selectToken2)).map((option: any | any[]) => (
                      <MenuItem key={option.id} value={option.symbol}>
                        {option.symbol}
                      </MenuItem>
                    ))}
                  </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <OutlinedInput inputProps={{ "data-testid": "Input1" }} className={classes.input} placeholder="0.0" value={globalState.inputToken1} style = {{width: 230}} color="primary" onChange={handleInputChange1} type="number" error={parseFloat(globalState.inputToken1)<=0}
                    endAdornment={<InputAdornment className={classes.inputAdorment} position="end">{globalState.token1.symbol}</InputAdornment>}/>
                </Grid>
              </Grid> 

            </Grid>
          </Paper>
        </Grid>

        <Grid item>
          <ArrowButton />
        </Grid>
        <br/>

        <Grid item xs={12}>          
          <Paper className={classes.paper} elevation={3} style={{width: 550, height: 150}}>
            <Grid container spacing={3} direction={'column'} alignItems={'center'} justify={'flex-start'}>

              <Grid item container spacing={1} direction={'row'} alignItems={'center'} justify={'flex-start'}>

                <Grid item xs={3}>
                  <b>To (estimated)</b>
                </Grid>
                <Grid item container xs={9} spacing={2} direction={'row'} alignItems={'center'} justify={'flex-end'}>
                  <Grid item>
                    {globalState.balance2 ? `Balance: ${(parseFloat(globalState.balance2)).toFixed(6).toString()} ${globalState.token2.symbol}` : 'Balance:'}
                  </Grid> 
                </Grid>

              </Grid>

              <Grid item container spacing={3} direction={'row'} justify={'center'} alignItems={'center'}>
                <Grid item>
                <FormControl>  
                  <InputLabel id="demo-customized-select-label">&nbsp;&nbsp;Select a Token</InputLabel>
                  <Select input={<TokenSelector />} inputProps={{ "data-testid": "Select2" }} label="Token" value={globalState.selectToken2} style = {{width: 230}} onChange={handleChange2} variant="outlined">
                    {(spliceNoMutate(globalState.tokenslist, globalState.selectToken1)).map((option: any | any[]) => (
                      <MenuItem key={option.id} value={option.symbol}>
                        {option.symbol}
                      </MenuItem>
                    ))}
                  </Select>
                  </FormControl>  
                </Grid>
                <Grid item>
                <OutlinedInput inputProps={{ "data-testid": "Input2" }} className={classes.input}  placeholder="0.0" value={globalState.inputToken2} style = {{width: 230}} color="primary" type="number"
                    endAdornment={<InputAdornment className={classes.inputAdorment} position="end">{globalState.token2.symbol}</InputAdornment>}/>
                </Grid>
              </Grid> 

            </Grid>
          </Paper>
        </Grid>

      </Grid>

      <Grid item>   
        <br/>
        <ControlButtons currentTrade={currentTrade} setCurrentTrade={setCurrentTrade}/>
      </Grid>

    </Grid>
  );
}