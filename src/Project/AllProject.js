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
}));

export default function AllProject({ props }) {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);

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
    let readData = localStorage.getItem("posts");
    console.log("read post", readData);
    const data = JSON.parse(readData) || [];
    console.log("load post", data);
    setPosts(data);

    setEditPostModal(new Array(data.length).fill(false));
  };

  const handleDelete = (i) => {
    console.log(i, "i");
    var data = posts;
    console.log("data l", data.length);
    data.splice(i, 1);
    console.log("data l", data.length);
    console.log("delete post", data);

    localStorage.setItem("posts", JSON.stringify(posts));
    console.log(posts, "deleteposts");
    setPosts([...posts]);
    console.log("state post", posts);
  };

  const handleEditPost = (p) => {
    console.log(p, "p");
    setPosts([...p]);
    console.log("edit post", p);
  };

  return (
    <>
      {/* <div className={classes.root}> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <br />
            {/* <PostForm
                                callBack={cb => {
                                    console.log('user name', cb)
                                    setPosts(cb)
                                }}
                            /> */}
            <br />
            <Grid
              item
              xs={12}
              sm={12}
              style={{ marginLeft: 80, marginRight: 80 }}
            >
              <Paper className={classes.paper}>
                <Typography
                  variant="h6"
                  component="h2"
                  style={{ margin: 15, alignItems: "flex-start" }}
                >
                  Projects
                </Typography>
                <Divider margin={5} />
                <Link to="/createProject">
                  <Button variant="contained" color="primary">
                    Create Project
                  </Button>
                </Link>

                <Divider margin={5} />
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    {!posts.length == 0 ? (
                      <TableBody>
                        <TableRow>
                          {posts.map((item, i) => {
                            return (
                              <span key={i}>
                                <ListItem>
                                  <ListItemText variant="h3">
                                    {i + 1}
                                    {") "}
                                    {"Title: "}
                                    {item.title}
                                    {"  "} <br />
                                    {i + 1}
                                    {") "} {"Category:"} {item.categories}
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
                          No post found.
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
