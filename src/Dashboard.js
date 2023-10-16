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
    height: 650,
    width: 200,
    borderRadius: 40,
    marginLeft: 20,
    marginTop: 20,
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
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid
              item
              xs={6}
              style={{
                width: 200,
                alignContent: "space-around",
                alignItems: "center",
              }}
            >
              <Avatar className={classes.avatar}>MH</Avatar>
              <MenuList style={{ top: 20 }}>
                <div style={{ display: "grid" }}>
                  <Button
                    variant="contained"
                    style={{ borderRadius: 40, marginTop: 15, left: 34 }}
                  >
                    My Profile
                  </Button>
                  <Button
                    variant="contained"
                    style={{ borderRadius: 40, marginTop: 15, left: 34 }}
                  >
                    My Task
                  </Button>
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
                  <Button
                    variant="contained"
                    style={{ borderRadius: 40, marginTop: 15, left: 34, top:10 }}
                  >
                    Logout
                  </Button>
                </div>
              </MenuList>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
