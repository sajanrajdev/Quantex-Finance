import Button from '@material-ui/core/Button';
import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
    balance: string | undefined, 
    selectToken1: any, 
    wallet: any, 
    setInputToken1: any, 
    setInputToken2: any
};

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

export default function BalanceButton (props: Props) {

  const classes = useStyles();

  const handleBalanceButton = () => {
      if(props.balance != null && props.balance != undefined) {
        if((parseFloat(props.balance)) > 0.01){
          props.setInputToken1(((parseFloat(props.balance))-0.01).toString()) // Max input - 0.01 to account for gas usage
          props.setInputToken2(''); // Reset input 2
        }
        else{
          alert("Insufficient balance!")
        }
      }
    }

  return(
    <div>
      {props.wallet && 
        <div>
          <Button variant="outlined" color="primary" className= {classes.enabledBtn} classes={{ disabled: classes.disabledBtn }} onClick={handleBalanceButton} disabled={(props.balance == null || props.balance == undefined)}>
            <div>MAX</div>
          </Button>
        </div>}
    </div>
  );
};