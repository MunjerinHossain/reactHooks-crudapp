import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 650
  },

}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
             <Grid item xs={6} style={{width:350}}>
          <Paper className={classes.paper}>
          <MenuList>
          <MenuItem>My Profile</MenuItem>
          <MenuItem>My Task</MenuItem>
          <Link to="/allProject">
          <MenuItem>My Project</MenuItem>  
          </Link>
          <MenuItem>Meeting</MenuItem>
          <MenuItem>Timeline</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
          </Paper>
        </Grid>
      
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
