import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import NewHomeImage from "./assests/newHomeImage.png";
import ITImg from "./assests/it-manage.png";
import AllPost from "./AllPost";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    //display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    position:'absolute',
    paddingTop:50
  },
  content: {
   // flex: "1 0 auto",
   //flexGrow:1,
   //margin:80,
   width: '600px'
  },
  cover: {
    width: 152,
  },
  text:{
    margin:10
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  // const handleLogin =() =>{
  //   Navigation.navigate('AllPost')
  // }

  return (
    <>
      <div className={classes.root}>
        <Card style={{ height: "800px" }}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <div style={{margin:90}}>
              <Typography component="h5" variant="h5" style={{marginTop:90, fontWeight:'bold', fontSize:32}}>
                Task Management System
              </Typography>
              <Typography variant="subtitle1" color="black" style={{marginTop:50, fontSize:22}}>
                One Platform
              </Typography>
              <Typography variant="subtitle1" color="black" style={{fontSize:22}}>
                Manage Your Work
              </Typography>
              </div>

              <div style={{position:'absolute', margin:120, left: 100, marginTop:-45}}>
              <Button variant="contained" color="black" style={{ margin: 5, borderRadius:40}}>
                Sign Up
              </Button>
              <Link to="/dashboard">
                <Button variant="contained" color="black" style={{ margin: 5, borderRadius:40, backgroundColor:'#f97f80'}}>
                  Login
                </Button>
              </Link>
              </div>
        

              {/* <CardMedia className={classes.cover} image={HomeImg} title="TMS Home"/> */}
            </CardContent>
            <div style={{marginLeft:-30}}>
            <img src={NewHomeImage} style={{maxWidth:750, maxHeight:900, marginTop:25, borderRadius:80, marginLeft:20}}/>
            </div>
   

          </div>
        </Card>      
        </div>
    </>
  );
}
