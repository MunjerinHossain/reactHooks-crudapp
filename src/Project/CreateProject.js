import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    // padding: theme.spacing(3),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
    // whiteSpace: "nowrap",
    // marginBottom: theme.spacing(1),
    // height:650,
    // width:200,
    // borderRadius: 40,left:40 ,  },
  },
  paperMenu: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    height: 650,
    width: 250,
    borderRadius: 40,
    marginLeft: 20,
    marginTop: 20,
  },
  paperProject: {
    //padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    // whiteSpace: "nowrap",
    //marginBottom: theme.spacing(1),
    height: 650,
    width: 1000,
    marginLeft: -90,
    borderRadius: 40,
    alignContent: "center",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
  root: {
    display: "grid",
    position: "relative",
    //flexGrow:1
  },
}));

export default function CreateProject({ callBack }) {
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

  const handleCreateProj = (event) => {
    let readProjects = localStorage.getItem("projects");
    console.log("read projects", readProjects);
    let value = JSON.parse(readProjects) || [];
    console.log("load projects", value);
    value.push({
      name: name,
      key: key,
      projUrl: projUrl,
      projectCat: projectCat,
      desc: desc,
      projectLead: projectLead,
    });
    localStorage.setItem("projects", JSON.stringify(value));
    console.log("save projects", value);
    callBack(value);
    setRedirect(true);
    console.log("length", value.length);
  };

  if (redirect) {
    return <Redirect to="/allProject" />;
  }

  return (
    <div style={{ margin: 15 }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={4}
          style={{
            width: 200,
            alignContent: "space-around",
            alignItems: "center",
          }}
        >
          <Paper className={classes.paperMenu}>
            <Avatar className={classes.avatar}>MH</Avatar>
            <MenuList style={{ top: 20 }}>
              <div
                style={{
                  display: "grid",
                  width: "auto",
                  height: "auto",
                  top: 20,
                }}
              >
                <MenuItem>
                  <Button
                    variant="contained"
                    style={{ borderRadius: 40, left: 40 }}
                  >
                    My Profile
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="contained"
                    style={{ borderRadius: 40, left: 40 }}
                  >
                    My Task
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Link to="/allProject">
                    <Button
                      variant="contained"
                      style={{ borderRadius: 40, left: 40 }}
                    >
                      My Project
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="contained"
                    style={{ borderRadius: 40, left: 40 }}
                  >
                    Meeting
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="contained"
                    style={{ borderRadius: 40, left: 40 }}
                  >
                    Timeline
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="contained"
                    style={{ borderRadius: 40, left: 40 }}
                  >
                    Settings
                  </Button>
                </MenuItem>

                <Button
                  variant="contained"
                  style={{
                    borderRadius: 40,
                    left: 60,
                    top: 20,
                    width: 90,
                  }}
                >
                  Logout
                </Button>
              </div>
            </MenuList>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paperProject}>
            <Typography
              variant="h6"
              component="h1"
              style={{ margin: 15,paddingTop:10 }}
            >
              Create Project
            </Typography>
            <Divider margin={5} />

            <div style={{ margin: 15, paddingLeft:300}}>
              <form className={classes.root} noValidate autoComplete="off">
                <div style={{ marginTop: 15, position: "absolute" }}>
                  <TextField
                    id="outlined-textarea"
                    label="* Name"
                    //placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    style={{ marginRight: 20 }}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="outlined-textarea"
                    label="* Key"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    onChange={(e) => setKey(e.target.value)}
                  />
                </div>

                <div style={{ marginTop: 90, position: "absolute" }}>
                  <TextField
                    id="outlined-textarea"
                    label="Project URL"
                    //placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    style={{ marginRight: 20 }}
                    onChange={(e) => setProjUrl(e.target.value)}
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Avatar"
                    placeholder="Insert Photo"
                    multiline
                    variant="outlined"
                    onChange={(e) => setKey(e.target.value)}
                    // style={{top:40}}
                  />
                </div>
                <div style={{ marginTop: 150, position: "absolute" }}>
                  <FormControl
                    className={classes.formControl}
                    style={{
                      position: "absolute",
                      width: 190,
                      left: -5,
                      top: 10,
                    }}
                  >
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                    >
                      * Project Category
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
                        <em>Categories</em>
                      </MenuItem>
                      <MenuItem value={"Service"}>Service</MenuItem>
                      <MenuItem value={"Software"}>Software</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div style={{ marginTop: 150, position: "absolute" }}>
                  <TextField
                    id="outlined-textarea"
                    label="Description"
                    //placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    style={{
                      marginRight: 20,
                      marginTop: 80,
                      top: 40,
                      width: 400,
                    }}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>

                <div style={{ marginTop: 350, position: "absolute" }}>
                  <FormControl
                    className={classes.formControl}
                    style={{
                      //position: "absolute",
                      width: 190,
                      left: -5,
                      top: 10,
                    }}
                  >
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                    >
                      Project Lead
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      value={projectLead}
                      onChange={handleProjLead}
                      displayEmpty
                      className={classes.selectEmpty}
                      variant="outlined"
                    >
                      <MenuItem value="">
                        <em>Select Leaders</em>
                      </MenuItem>
                      <MenuItem value={"Imran"}>Imran</MenuItem>
                      <MenuItem value={"Munjerin"}>Munjerin</MenuItem>
                      <MenuItem value={"Sora"}>Sora</MenuItem>
                      <MenuItem value={"Shuvo"}>Shuvo</MenuItem>
                      <MenuItem value={"Theodore"}>Theodore</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </form>
            </div>
          </Paper>

          <Link to="/allProject">
            <Button color="primary" style={{
                backgroundColor: "#C5C6D0",
                color: "black",
                width: 90,
                fontSize: 13,
                bottom: 70
              }}>
              Cancel
            </Button>
          </Link>
          <Link to="/allProject">
            <Button
              color="primary"
              autoFocus
              onClick={handleCreateProj}
              style={{
                backgroundColor: "#9dee94",
                color: "black",
                left: 30,
                width: 90,
                fontSize: 13,
                bottom: 70,
              }}
            >
              Create
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}
