import React from 'react'
import Button from '@material-ui/core/Button';
import { MCircularProgress } from '../circular-progress/CircularProgress';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    MButton:{
        position: 'relative'
    }
  }),
);

export function MButton(props:any){
    const classes = useStyles([]);
    return(
        // <Button className={classes.MButton} disabled={props.showLoading} {...props} disableElevation>{props.showLoading && <MCircularProgress color="secondary" size={24} />}</Button>
        <Button {...props} disableElevation />
    )
};