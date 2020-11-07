import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogContentText from '@material-ui/core/DialogContentText';


const AddNewCategory = ({ callBack }) => {
    const [userName, setUserName] = useState("");

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveCategory = () => {

        let readCategory = localStorage.getItem('categories')
        console.log('read category', readCategory);
        const value = JSON.parse(readCategory) || [];
        console.log('load category', value);
        value.push(userName);
        localStorage.setItem('categories', JSON.stringify(value))
        // setAllCategories(value)
    }

    return (
        <div>
            <br/>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
               Create new category
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Add Category</DialogTitle>
                <DialogContent>
                
                    <TextField

                        id="newTitle"
                        label="Title"
                        variant="outlined"
                        placeholder="E.g: Uniliever"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={() => { handleClose(); saveCategory(); callBack(userName)}} color="primary" autoFocus>
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>


    );
};

export default AddNewCategory;