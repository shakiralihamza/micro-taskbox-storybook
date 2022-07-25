import React from 'react';
import {Grid, Typography} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

function NoTasks() {
    return (
        <Grid container spacing={2} justifyContent={'center'} direction={'column'} alignItems={'center'}>
            <Grid item xs>
                <DoneIcon sx={{fontSize:50, color:'success.light'}}/>
            </Grid>
            <Grid item xs>
                <Typography fontWeight={'bold'} variant={'body2'}>You have no tasks</Typography>
            </Grid>
        </Grid>
    );
}

export default NoTasks;
