import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IconButton, Slider, Typography, TextField, Modal, Backdrop, Fade, Grid } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

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

export default function SettingsMenu(handleInputDeadline: any, deadline: string) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handler for Deadline input
/*   const handleInputDeadline = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value==''){
      setDeadline('');
    }
    else{
      setDeadline(parseFloat(event.target.value).toFixed(0));
      console.log("test")
    }
  }; */

  return (
    <div>
      <IconButton onClick={handleOpen} color="primary">
          <SettingsIcon />
      </IconButton>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container spacing={2} direction={'column'} alignItems={'center'}>
                <Grid item>
                  <Typography id="discrete-slider-small-steps" gutterBottom>
                    Slippage Tolerance (%)
                  </Typography>
                  <Slider
                    defaultValue={0.5}
                    /* aria-labelledby="discrete-slider-small-steps" */
                    step={0.1}
                    marks
                    min={0.3}
                    max={1.0}
                    valueLabelDisplay="auto"
                    onChangeCommitted = { (e, value) => console.log(value)}
                  />
                </Grid>
                <Grid container item spacing={5} direction={'row'} justify={'center'}>
                  <Grid item>
                    <Typography id="deadline-text" gutterBottom>
                        Deadline
                    </Typography>
                    <TextField 
                        id="Deadline" 
                        label="" 
                        size="small" 
                        placeholder="20" 
                        variant="standard" 
                        /* onChange={handleInputDeadline}  */
                        /* value={deadline} */ 
                        style = {{width: 50}} 
                        color="primary" 
                        type="number" 
                        error={(deadline=='')||parseInt(deadline)<=0}/>
                    min
                  </Grid>
                </Grid>  
              </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}