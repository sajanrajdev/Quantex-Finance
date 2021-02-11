import React from 'react';
import SwapVerticalCircleRoundedIcon from '@material-ui/icons/SwapVerticalCircleRounded';
import {IconButton} from '@material-ui/core'
import useGlobal from "../Store";

const ArrowButton = () => {

    const [globalState, globalActions] = useGlobal();
    const actions: any = globalActions;

    const handleClick = () => {

        const tempSelectToken1 = globalState.selectToken1;

        if(tempSelectToken1 != '' && globalState.selectToken2 != ''){
            const tempInputToken1 = globalState.inputToken1;
            const tempToken1 = globalState.token1;
            if(tempInputToken1 != '' && globalState.inputToken2 != ''){
                actions.changeArrowFlag(true); // Sets flag if button pressed with both values in (after estimation)
            }
            actions.changeInputToken1(globalState.inputToken2);
            actions.changeInputToken2(tempInputToken1);
            actions.changeSelectToken1(globalState.selectToken2);
            actions.changeSelectToken2(tempSelectToken1);
            actions.changeToken1(globalState.token2);
            actions.changeToken2(tempToken1);
        }
        else{
            console.log("Test")
        }
    }

    return (
        <IconButton onClick={handleClick} color="primary" disabled={globalState.selectToken1 == '' || globalState.selectToken2 == ''}>
            <SwapVerticalCircleRoundedIcon fontSize="large" />
        </IconButton>
    );
};

export default ArrowButton;