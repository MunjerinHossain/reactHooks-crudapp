import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import HomeImg from './assests/home.jpg'
import AllPost from './AllPost';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //display: 'flex',
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 152,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  // const handleLogin =() =>{
  //   Navigation.navigate('AllPost')
  // }

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ITSMS IT Smart System
          </Typography>
          <Button color="inherit">Product</Button>
          <Button color="inherit">Customer</Button>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About Us</Button>
        </Toolbar>
      </AppBar>
     
      <Card style={{height: '800px', width:'750px'}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Task Management System
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          One Platform
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Manage Your Work
          </Typography>
          <Button variant="contained" color="primary" style={{margin:5}}>Sign Up</Button>
          <Button variant="contained" color="primary" >Login</Button>
          {/* <CardMedia className={classes.cover} image={HomeImg} title="TMS Home"/> */}
        </CardContent>  

          </div>
        
      </Card>
 
    </div>
      </>
  );
}
