import { Container, TextField, MenuItem, Button, ButtonGroup, Divider } from '@material-ui/core';
import { Paper, CircularProgress, Grid, Box, Slider, Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import BalanceButton from './BalanceButton'

import * as React from 'react';

const styles = {
    paper: {
      borderRadius: 3,
      border: 0,
      height: 48,
      padding: '0 30px',
      boxShadow: '0 5px 5px 5px rgba(244, 21, 125, .3)',
    },
  };
  const useStyles = makeStyles(styles);

type Props = {
    balance: string | undefined, 
    wallet: any, 
    setInputToken1: any, 
    setInputToken2: any,
    tokenslist: any | any[],
    handleChange1: any,
    handleChange2: any,
    handleInputChange1: any,
    inputToken1: string,
    inputToken2: string,
    selectToken1: any,
    selectToken2: any,
    setTolerance: any,
    handleInputGasPrice: any,
    handleInputDeadline: any,
    gasprice: string,
    deadline: string,
};

export default function TransactionForm (props: Props) {

    const classes = useStyles();

    return (
        <div>
        <Paper className={classes.paper} elevation={3} style={{width: 550, height: 400}}>
            <Box p={1} m={1}>
            <Grid container spacing={2} direction={'column'} alignItems={'center'} justify={'center'}>
                <Grid item container spacing={2} direction={'row'} alignItems={'center'} justify={'flex-end'}>
                <Grid item>
                    {props.balance ? `Balance: ${(parseFloat(props.balance)/1000000000000000000).toFixed(6).toString()} ETH` : 'Balance:'}
                </Grid> 
                <Grid item>
                    <BalanceButton balance={props.balance} selectToken1={props.selectToken1} wallet={props.wallet} setInputToken1={props.setInputToken1} setInputToken2={props.setInputToken2}></BalanceButton>
                </Grid>
                </Grid>
                <Grid item container spacing={2} direction={'row'} justify={'center'}>
                <Grid item>
                    <TextField id="Select1" select label="Token" helperText="From" value={props.selectToken1} style = {{width: 230}} onChange={props.handleChange1} variant="outlined">
                        <MenuItem key={props.tokenslist[0].id} value={props.tokenslist[0].symbol}> 
                        {props.tokenslist[0].symbol} 
                        </MenuItem>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField id="Input1" label="Amount" placeholder="0.0" variant="outlined" value={props.inputToken1} style = {{width: 230}} color="primary" onChange={props.handleInputChange1} disabled={(props.selectToken1=='')||(props.selectToken2=='')} type="number" error={parseFloat(props.inputToken1)<=0}/>
                </Grid>
                </Grid> 
                <Grid item container spacing={2} direction={'row'} justify={'center'}>
                <Grid item>
                    <TextField id="Select2" select label="Token" helperText="To" value={props.selectToken2} style = {{width: 230}} onChange={props.handleChange2} variant="outlined">
                    {props.tokenslist.slice(1, 3).map((option: any | any[]) => (
                        <MenuItem key={option.id} value={option.symbol}>
                        {option.symbol}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField id="Input2" label="Estimated Price" placeholder="0.0" variant="outlined" value={props.inputToken2} style = {{width: 230}} color="primary" disabled type="number"/>
                </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} direction={'column'} alignItems={'center'}>
                <Grid item>
                <Typography id="discrete-slider-small-steps" gutterBottom>
                    Slippage Tolerance
                </Typography>
                <Slider
                    defaultValue={0.5}
                    aria-labelledby="discrete-slider-small-steps"
                    step={0.1}
                    marks
                    min={0.0}
                    max={1.0}
                    valueLabelDisplay="auto"
                    onChangeCommitted = { (e, value) => props.setTolerance(value)}
                />
                </Grid>
                <Grid container item spacing={5} direction={'row'} justify={'center'}>
                <Grid item>
                    <TextField id="Gas Price" label="" size="small" helperText="Gas Price" placeholder="20" variant="standard" onChange={props.handleInputGasPrice} value={props.gasprice} style = {{width: 60}} color="primary" type="number" error={(props.gasprice=='')||parseInt(props.gasprice)<=0}/>
                    GWei
                </Grid>
                <Grid item>
                    <TextField id="Deadline" label="" size="small" helperText="Deadline" placeholder="20" variant="standard" onChange={props.handleInputDeadline} value={props.deadline} style = {{width: 50}} color="primary" type="number" error={(props.deadline=='')||parseInt(props.deadline)<=0}/>
                    min
                </Grid>
                </Grid>  
            </Grid>
            </Box>
        </Paper>
        </div>
    );
};


