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
import Category from './Category'
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            top: '100px'
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '500px',
        top: '100px'
    },
    selectEmpty: {
        marginTop: theme.spacing(3),
    },
    Button: {
        display: "inline",
        marginLeft: '800px',
    }
}));

const EditPost = ({ callBack, i }) => {
    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);
    const [allCategories, setAllCategories] = useState([]);

    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {

        let readCategory = localStorage.getItem('categories')
        console.log('read category', readCategory);
        const value = JSON.parse(readCategory) || [];
        console.log('load category', value);
        setAllCategories(value)

        let readData = localStorage.getItem('posts')
        console.log('read post', readData);
        const data = JSON.parse(readData) || [];
        console.log('load post', data);
        setTitle(data[i].title)
        setCategories(data[i].categories)

    }, [])

    const handleSubmit = () => {

        let readPost = localStorage.getItem('posts')
        console.log('read posts', readPost);
        let value = JSON.parse(readPost) || [];
        console.log('load posts', value);
        console.log(i, 'i');

        value[i].title = title;
        value[i].categories = categories;


        localStorage.setItem('posts', JSON.stringify(value))
        console.log(value, 'editposts');

        setOpen(false)
        callBack(value)
    }



    return (
        <div>
            <List>
                <ListItem className={classes.Button}>
                    <IconButton edge="end" aria-label="delete">
                        <EditIcon onClick={handleClickOpen} />
                    </IconButton>
                </ListItem>
            </List>


            <Dialog open={open} onClose={handleClose} style={{ width: 500 }}>
                <DialogTitle>Edit post:</DialogTitle>
                <DialogContent>
                    <>
                        <div>
                            <TextField
                                id="newTitle"
                                label="Title"
                                variant="outlined"
                                placeholder="E.g: Uniliever"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />

                            <div>
                                <br />
                                <Category
                                    callBack={category => {
                                        console.log('category', category)
                                        let all = allCategories
                                        all.push(category)
                                        setAllCategories([...all])

                                        let get = categories
                                        get.push(category)
                                        setCategories(get)
                                    }}
                                />
                                <br />
                                <br />
                                <Autocomplete
                                    multiple
                                    id="tags-standard"
                                    options={allCategories}
                                    getOptionLabel={option => option}
                                    value={categories}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="standard"
                                            label="All Categories"
                                            placeholder="Categories"

                                        />
                                    )}
                                    onChange={(e, v) => {
                                        setCategories(v)
                                        console.log('auto', e.target.value, v);
                                    }}
                                />
                            </div>
                            <br />

                        </div>

                    </>

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">Close</Button>
                    <Button onClick={handleSubmit} color="primary">Save</Button>
                </DialogActions>
                
            </Dialog>

        </div>

    );
};

export default EditPost;