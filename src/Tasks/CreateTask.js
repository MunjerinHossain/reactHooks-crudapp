import React, { useState, useEffect, props } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      top: "100px",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "150px",
    top: "100px",
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
  root1: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    alignContent: "center",
    left: "300px",
    height: 650,
    borderRadius: 40,
  },
  table: {
    minWidth: 650,
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(20),
    right: theme.spacing(14),
  },
  home: {
    position: "absolute",
    // bottom: theme.spacing(20),
    right: theme.spacing(14),
  },
  date: {
    // display: "flex",
    // flexWrap: "wrap",

    position: "absolute",
    right: theme.spacing(14),
  },
  startDate: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 200,
    top: 300,
    left: 382,
  },
  endDate: {
    // marginRight: theme.spacing(1),
    width: 200,
    top: 300,
    left: 650,
  },
}));

export default function CreateTask() {
  const classes = useStyles();

  const [redirect, setRedirect] = React.useState(false);
  const [name, setName] = React.useState("");
  const [key, setKey] = React.useState("");
  const [projUrl, setProjUrl] = React.useState("");
  const [projectCat, setProjectCat] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [projectLead, setProjectLead] = React.useState("");

  const handleProjCat = (event) => {
    setProjectCat(event.target.value);
  };

  const handleProjLead = (event) => {
    setProjectLead(event.target.value);
  };
  return (
    <>
      <div style={{ margin: 50 }}>
        <Paper className={classes.paper}>
          <div style={{ marginRight: 15, display: "flex", flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="h4"
              style={{
                margin: 15,
                alignItems: "flex-start",
                marginLeft: 50,
                color: "black",
              }}
            >
              Tasks
            </Typography>
            <Link to="/dashboard">
              <FontAwesomeIcon
                icon={faHouse}
                style={{
                  color: "green",
                  marginTop: 22,
                  alignContent: "center",
                }}
                className={classes.home}
              />
            </Link>
          </div>
          <Divider margin={5} />
          <Typography
            variant="h6"
            component="h2"
            style={{
              fontSize: 16,
              margin: 20,
              display: "flex",
              marginLeft: 50,
              marginTop: 30,
            }}
          >
            Required field are marked with an *
          </Typography>
          <div style={{ position: "absolute", marginLeft: 50, marginTop: -90 }}>
            <FormControl className={classes.formControl}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                * Project
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={projectCat}
                onChange={handleProjCat}
                displayEmpty
                className={classes.selectEmpty}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Project</em>
                </MenuItem>
                <MenuItem value={10}>Project 1</MenuItem>
                <MenuItem value={20}>Project 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              className={classes.formControl}
              style={{ marginLeft: 90 }}
            >
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Issue Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={projectCat}
                onChange={handleProjCat}
                displayEmpty
                className={classes.selectEmpty}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Issue Task</em>
                </MenuItem>
                <MenuItem value={10}>Task</MenuItem>
                <MenuItem value={20}>Epic</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              className={classes.formControl}
              style={{ alignContent: "center", marginLeft: 90 }}
            >
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Epic
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={projectCat}
                onChange={handleProjCat}
                displayEmpty
                className={classes.selectEmpty}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Epic</em>
                </MenuItem>
                <MenuItem value={10}>Story 1</MenuItem>
                <MenuItem value={20}>Story 2</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div style={{ position: "absolute", marginLeft: 50, marginTop: 20 }}>
            <FormControl className={classes.formControl}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={projectCat}
                onChange={handleProjCat}
                displayEmpty
                className={classes.selectEmpty}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Status</em>
                </MenuItem>
                <MenuItem value={10}>Open</MenuItem>
                <MenuItem value={20}>In Progress</MenuItem>
                <MenuItem value={20}>Close</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="outlined-textarea"
              label="Assignee *"
              //placeholder="Placeholder"
              multiline
              variant="outlined"
              style={{ alignContent: "center", marginLeft: 90, top: 130 }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={{ position: "absolute", marginLeft: 50, marginTop: 20 }}>
            <TextField
              id="outlined-textarea"
              label="Summary"
              //placeholder="Placeholder"
              multiline
              variant="outlined"
              style={{
                alignContent: "center",
                marginLeft: 10,
                top: 230,
                width: 435,
              }}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              id="outlined-textarea"
              label="Estimated Days"
              //placeholder="Placeholder"
              multiline
              variant="outlined"
              style={{ alignContent: "center", marginLeft: 60, top: 230 }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={{ position: "absolute", marginLeft: 50 }}>
            <TextField
              id="outlined-textarea"
              label="Description"
              //placeholder="Placeholder"
              multiline
              variant="outlined"
              style={{
                alignContent: "center",
                marginLeft: 10,
                top: 350,
                width: 435,
                height: "auto",
              }}
              onChange={(e) => setName(e.target.value)}
            />

            <form className={classes.date} noValidate>
              <TextField
                id="date"
                label="Start Date"
                type="date"
                defaultValue="2023-10-17"
                className={classes.startDate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>

            <form className={classes.date} noValidate>
              <TextField
                id="date"
                label="End Date"
                type="date"
                defaultValue="2024-10-17"
                className={classes.endDate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </div>

          <div style={{ marginLeft: 50, marginTop:480 }}>
            <Button
              variant="outlined"
              style={{ backgroundColor: "#C5C6D0", color: "black",width:90, fontSize:13  }}
            >
              Cancel
            </Button>

            <Link to="/allTasks">
              <Button
                variant="outlined"
                style={{ backgroundColor: "#9dee94", color: "black", left:30, width:90, fontSize:13 }}
                autoFocus
              >
                Create
              </Button>
            </Link>
          </div>
        </Paper>
      </div>
    </>
  );
}
