import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Category from './Category'
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DialogContentText from '@material-ui/core/DialogContentText';



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
}));

const AddNewPost = ({ callBack }) => {
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

    }, [])

    const handleSubmit = () => {

        let readCategory = localStorage.getItem('posts')
        console.log('read posts', readCategory);
        let value = JSON.parse(readCategory) || [];
        console.log('load posts', value);
        value.push({ 'title': title, 'categories': categories });
        localStorage.setItem('posts', JSON.stringify(value))
        console.log('save posts', value);
        setOpen(false)
        callBack(value)
        // setAllCategories(value)
    }

    return (
        <div>
            <Button onClick={handleClickOpen} variant="contained">Create New post</Button>

            <Dialog open={open} onClose={handleClose} style={{ width: 500 }}>
                <DialogTitle>Add new post:</DialogTitle>
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

export default AddNewPost;