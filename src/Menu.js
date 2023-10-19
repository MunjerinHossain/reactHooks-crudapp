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
import HomeImg from "./assests/home.jpg";
import AllPost from "./AllPost";
import { Link, Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

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
    color: "black",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [dash, setDash] = React.useState(false);
  console.log("dash", dash);

  return (
    <>
      <div className={classes.root}>
        <>
          <AppBar position="static" style={{ backgroundColor: "white" }}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="black"
                aria-label="menu"
              >
                <MenuIcon color="black" />
              </IconButton>
              <Typography variant="h6" className={classes.title} style={{color:"black", fontWeight:'bold'}}>
                ITSMS  IT Smart System
              </Typography>

              <Button color="black" style={{right:80}}>Product</Button>
              <Button color="black" style={{right:80}}>Customer</Button>
              <Button color="black" style={{right:80}}>FAQ</Button>
              <Button color="black" style={{right:80}}>Pricing</Button>
              <Button color="black" style={{right:80}}>About Us</Button>
            </Toolbar>
          </AppBar>
        </>
      </div>
    </>
  );
}
