import React, { useState, useEffect } from "react";
import useGlobal from "../Store";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Switch, Grid} from '@material-ui/core';
import {truncateAddress, networkName} from '../utils';
import SeetingsMenu from './SettingsMenu'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      background: 'none',
      fontFamily: 'Roboto',
    },
    networkBtn: {
      border: 'none',
    },
    addressBtn: {
      background: '#494d54',
      textTransform: 'none',
      borderRadius: 30,
      borderColor: 'none',
      lineHeight: 1.4,
    },
    connectBtn: {
      textTransform: 'none',
      lineHeight: 1.4,
      fontSize: 15,
      borderRadius: 25,
    },
    title: {
      fontSize: '25px',
    },
    netowrkColor: {
      color: '#24806c'
    }
  }));

export default function TopAppBar({onboard}:{onboard: any}) {
  const classes = useStyles();
  const [buttonstatus, setButtonStatus] = useState<string | null>('Connect Wallet');
  const [globalState, globalActions] = useGlobal();
  const actions: any = globalActions;

  const address = globalState.address;
  const network = globalState.walletnetwork;
  const darkmode = globalState.darkmode;

  useEffect(() => {
    const previouslySelectedWallet = window.localStorage.getItem(
      'selectedWallet'
    )

    if (previouslySelectedWallet && onboard) {
      onboard.walletSelect(previouslySelectedWallet)
      setButtonStatus('Disconnect Wallet');
    }
  }, [onboard])

  const handleDarkModeSwitch = () => {
    if(darkmode){
      actions.changeDarkMode(false);
    }
    else{
      actions.changeDarkMode(true);
    }
  }

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title}><b>Quantex</b></Typography>
          <Grid container spacing={1} direction={'row'} alignItems={'center'} justify={'flex-end'}>
            <Grid item>{address && <Button className={classes.networkBtn} variant="outlined"><b><span className={classes.netowrkColor}>{networkName(network)}</span></b></Button>}</Grid>
            <Grid item>{address && <Button className={classes.addressBtn} variant="contained" style={{ border: '2px solid' }}><b>{truncateAddress(address)}</b></Button>}</Grid>
            <Grid item><Button name='Connect' className={classes.connectBtn} color="secondary" variant="contained" onClick={ async () => {
              if(buttonstatus == 'Connect Wallet'){
                await onboard.walletSelect()
                await onboard.walletCheck()
                if(window.ethereum){
                  setButtonStatus('Disconnect Wallet');  
                }
              }
              else{
                setButtonStatus('Connect Wallet');
                onboard.walletReset();
              }
            }}>{buttonstatus}</Button></Grid>
          </Grid>
          <Switch color="primary" onChange={handleDarkModeSwitch}></Switch>
          <SeetingsMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}