import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function CSSGrid() {
  const classes = useStyles();

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{margin:15}}>
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
        </MenuList></Paper>
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

                <div style={{margin:15}}>
                <form className={classes.root} noValidate autoComplete="off">
      <div style={{marginTop:15}}>
      <TextField
          id="outlined-textarea"
          label="* Name"
          //placeholder="Placeholder"
          multiline
          variant="outlined"
          style={{marginRight:20}}
        />
<TextField
          id="outlined-textarea"
          label="* Key"
          placeholder="Placeholder"
          multiline
          variant="outlined"
        />
        

      </div>

      <div style={{marginTop:15}}>
      <TextField
          id="outlined-textarea"
          label="Project URL"
          //placeholder="Placeholder"
          multiline
          variant="outlined"
          style={{marginRight:20}}
        />
        

      </div>
     
     
    </form>
             
                </div>
</Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}
