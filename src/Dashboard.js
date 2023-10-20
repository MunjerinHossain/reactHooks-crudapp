import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(1),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
    // height: 650,
    // alignItems: "center",
    // borderRadius: 40

    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    height: 600,
    width: 200,
    borderRadius: 40,
    marginLeft: 40,
    marginTop: 20,
    bottom: 20,
    position:'absolute',
    display:'flex'
  },
  avatar: {
    color: "black",
    backgroundColor: "yellow",
    borderColor: "black",
    textAlign: "center",
    alignItems: "center",
    padding: 8,
    left: 65,
    top: 25,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid
                item
                xs={6}
                style={{
                  width: 220,
                  alignContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Avatar className={classes.avatar}>MH</Avatar>
                <MenuList style={{ top: 20 }}>
                  <div style={{ display: "grid"}}>
                    <Button
                      variant="contained"
                      style={{ borderRadius: 40, marginTop: 15, left: 34 }}
                    >
                      My Profile
                    </Button>
                    <Link to="/allTasks">
                      <Button
                        variant="contained"
                        style={{ borderRadius: 40, marginTop: 15, left: 34 }}
                      >
                        My Task
                      </Button>
                    </Link>
                    <Link to="/allProject">
                      <Button
                        variant="contained"
                        style={{ borderRadius: 40, marginTop: 15, left: 34 }}
                      >
                        My Project
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      style={{ borderRadius: 40, marginTop: 15, left: 34 }}
                    >
                      Meeting
                    </Button>
                    <Button
                      variant="contained"
                      style={{ borderRadius: 40, marginTop: 15, left: 34 }}
                    >
                      Timeline
                    </Button>
                    <Button
                      variant="contained"
                      style={{ borderRadius: 40, marginTop: 15, left: 34 }}
                    >
                      Settings
                    </Button>
                    <Link to="/">
                      <Button
                        variant="contained"
                        style={{
                          borderRadius: 40,
                          marginTop: 15,
                          left: 34,
                          top: 10,
                        }}
                      >
                        Logout
                      </Button>
                    </Link>
                  </div>
                </MenuList>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={8} style={{alignContent:'center', marginLeft:360}}>
          <Paper style={{height: 600, borderRadius:80 }}>
            <div style={{  marginTop:30 }}>
              <Typography variant="h6" component="h2" style={{fontSize:22, fontWeight:'bold', color:'#808080', paddingTop:80}}>
                Dashboard is on progress...
              </Typography>
            </div>
            {/* <Grid
             item
             xs={6}
             style={{
               width: 200,
               alignContent: "space-around",
               alignItems: "center",
             }}
           >
           
           </Grid> */}
          </Paper>
        </Grid>
      </div>
    </>
  );
}
