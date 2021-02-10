import { useState } from "react";
import useGlobal from "../Store";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, Select, ButtonGroup, Button, OutlinedInput, MenuItem, InputAdornment } from '@material-ui/core';
import BalanceButton from './BalanceButton'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function SettingsMenu() {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const actions: any = globalActions;

  return (
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
  );
}