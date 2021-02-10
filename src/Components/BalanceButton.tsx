import * as React from 'react';
import useGlobal from "../Store";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    enabledBtn: {
      border: '2px solid',
      lineHeight: 1.4,
      fontWeight: 'bold',
      '&:hover': {
        border: '2px solid',
        lineHeight: 1.4,
        fontWeight: 'bold',
        boxShadow: '0 0 0 0.1rem rgba(36,128,108)',
      },
    },
    disabledBtn: {
      backgroundColor: '#494d54',
      lineHeight: 1.4,
      fontWeight: 'bold',
    }
  }));

export default function BalanceButton () {

  const [globalState, globalActions] = useGlobal();
  const actions: any = globalActions;

  const balance1 = globalState.balance1;
  const wallet = globalState.wallet;

  const classes = useStyles();

  const handleBalanceButton = () => {
      if(balance1 != null && balance1 != undefined) {
        if((parseFloat(balance1)) > 0.01){
          actions.changeInputToken1(((parseFloat(balance1))-0.01).toString()) // Max input - 0.01 to account for gas usage
          actions.changeInputToken2(''); // Reset input 2
        }
        else{
          alert("Insufficient balance!")
        }
      }
    }

  return(
    <div>
      {wallet && 
        <div>
          <Button variant="outlined" color="primary" className= {classes.enabledBtn} classes={{ disabled: classes.disabledBtn }} onClick={handleBalanceButton} disabled={(balance1 == '' || balance1 == undefined)}>
            <div>MAX</div>
          </Button>
        </div>}
    </div>
  );
};