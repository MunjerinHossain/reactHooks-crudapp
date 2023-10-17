import React, { useState, useEffect, props } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
//import PostForm from '../PostForm.js'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import EditPost from './EditPost'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

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
    minWidth: "500px",
    top: "100px",
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
  root1: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    alignContent: "center",
    left: "300px",
    height: 650,
   
  },
  table: {
    minWidth: 650,
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(20),
    right: theme.spacing(14),
  },
  home:{
    position: "absolute",
    // bottom: theme.spacing(20),
    right: theme.spacing(14),
  }
}));

export default function AllTasks({ props }) {
  const classes = useStyles();

  const [projects, setProjects] = useState([]);

  const [editPostModal, setEditPostModal] = React.useState([]);

  useEffect(() => {
    try {
      console.log("save");
      getData();
    } catch (error) {
      console.log(error, "error");
    }
  }, []);

  const getData = () => {
    let readData = localStorage.getItem("projects");
    console.log("read projects", readData);
    const data = JSON.parse(readData) || [];
    console.log("load projects", data);
    setProjects(data);

    setEditPostModal(new Array(data.length).fill(false));
  };

  const handleDelete = (i) => {
    console.log(i, "i");
    var data = projects;
    console.log("data l", data.length);
    data.splice(i, 1);
    console.log("data l", data.length);
    console.log("delete post", data);

    localStorage.setItem("projects", JSON.stringify(projects));
    console.log(projects, "deleteprojects");
    setProjects([...projects]);
    console.log("state post", projects);
  };

  const handleEditPost = (p) => {
    console.log(p, "p");
    setProjects([...p]);
    console.log("edit projects", p);
  };

  return (
    <>
      {/* <div className={classes.root}> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid
              item
              xs={12}
              sm={12}
              style={{ marginLeft: 80, marginRight: 80 }}
            >
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
          
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                  <Link to="/createProject">
                  <Tooltip title="Add" aria-label="add">
                    <Fab color="secondary" className={classes.absolute}>
                      <AddIcon />
                    </Fab>
                  </Tooltip>
                </Link>
                
                    {!projects.length == 0 ? (
                      <TableBody>
                        <TableRow>
                          {projects.map((item, i) => {
                            return (
                              <span key={i}>
                                <ListItem>
                                  <ListItemText variant="h3">
                                    {i + 1}
                                    {") "}
                                    {"Name: "}
                                    {item.name}
                                    {"  "} <br />
                                    {i + 1}
                                    {") "} {"Key:"} {item.key}
                                    {/* <EditPost
                                                                        callBack={handleEditPost}
                                                                        i={i}
                                                                    /> */}
                                    <br />
                                    <br />
                                    <ListItemSecondaryAction>
                                      <IconButton
                                        edge="end"
                                        aria-label="delete"
                                      >
                                        <DeleteIcon
                                          onClick={() => {
                                            handleDelete(i);
                                          }}
                                        />
                                      </IconButton>
                                    </ListItemSecondaryAction>
                                  </ListItemText>
                                </ListItem>
                                <Divider />
                              </span>
                            );
                          })}
                        </TableRow>
                      </TableBody>
                    ) : (
                      <div style={{ margin: "10px" }}>
                        <Typography variant="h6" component="h2">
                          No Task found.
                        </Typography>
                      </div>
                    )}
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {/* </div> */}
    </>
  );
}
