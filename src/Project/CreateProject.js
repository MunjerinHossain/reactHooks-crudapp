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
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
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
}));

export default function CSSGrid() {
  const classes = useStyles();

  const [value, setValue] = React.useState("");
  const [projectCat, setProjectCat] = React.useState("");
  const [projectLead, setProjectLead] = React.useState("");

  const handleProjCat = (event) => {
    setProjectCat(event.target.value);
  };

  const handleProjLead = (event) => {
    setProjectLead(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ margin: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <MenuList>
              <MenuItem>My Profile</MenuItem>
              <MenuItem>My Task</MenuItem>
              <MenuItem>My Project</MenuItem>
              <MenuItem>Meeting</MenuItem>
              <MenuItem>Timeline</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Typography
              variant="h6"
              component="h1"
              style={{ margin: 15, alignItems: "flex-start" }}
            >
              Projects
            </Typography>
            <Divider margin={5} />

            <div style={{ margin: 15 }}>
              <form className={classes.root} noValidate autoComplete="off">
                <div style={{ marginTop: 15 }}>
                  <TextField
                    id="outlined-textarea"
                    label="* Name"
                    //placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    style={{ marginRight: 20 }}
                  />
                  <TextField
                    id="outlined-textarea"
                    label="* Key"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                  />

                  <div style={{ marginTop: 15 }}>
                    <TextField
                      id="outlined-textarea"
                      label="Project URL"
                      //placeholder="Placeholder"
                      multiline
                      variant="outlined"
                      style={{ marginRight: 20 }}
                    />

                    {/* <Typography
                      style={{ margin: 15, alignItems: "flex-start" }}
                    >
                      Avatar
                    </Typography> */}
                    <FormControl className={classes.formControl}>
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
                        <MenuItem value={10}>Service</MenuItem>
                        <MenuItem value={20}>Software</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      id="outlined-textarea"
                      label="Description"
                      //placeholder="Placeholder"
                      multiline
                      variant="outlined"
                      style={{ marginRight: 20 }}
                    />

<FormControl className={classes.formControl}>
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
                        <MenuItem value={10}>Imran</MenuItem>
                        <MenuItem value={20}>Munjerin</MenuItem>
                        <MenuItem value={30}>Sora</MenuItem>
                        <MenuItem value={40}>Shuvo</MenuItem>
                        <MenuItem value={50}>Theodore</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </form>
              <Button color="primary">
                        Cancel
          </Button>
                    <Button color="primary" autoFocus>
                        Save
          </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}
