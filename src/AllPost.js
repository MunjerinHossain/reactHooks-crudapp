import React, { useState, useEffect, props } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PostForm from './PostForm.js'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Category from './Category'
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';


function storage() {

    console.log('storage');
}

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

export default function FormPropsTextFields({ props }) {
    const classes = useStyles();

    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([
        {   // currentName: "",
            name: '',
            // currentParent: [],
            parent: '',
        }
    ])
    const [data, setData] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const [values, setValues] = useState([
        {   // currentName: "",
            title: '',
            // currentParent: [],
            content: '',
        }
    ])


    // useEffect(() => {
    //     // localStorage.clear();
    //     // console.log('data', category);

    //     try {

    //         // const valueString = localStorage.setItem('posts', JSON.stringify(posts));


    //         // // const readData = value.
    //         // // console.log('value', value);
    //         // // setCategory(value);
    //         // console.log('save data: ', valueString);
    //         // setPosts(valueString)
    //         // // else {
    //         // //     console.log('no data found');
    //         // }

    //         handleSubmit();

    //         console.log('save');

    //     } catch (error) {
    //         console.log(error, 'error');
    //     }

    // }, []);


    useEffect(() => {
        // localStorage.clear();
        // console.log('data', category);

        try {

            console.log('save');
            getData()

        } catch (error) {
            console.log(error, 'error');
        }

    }, []);

    const handleChange = (item, i) => e => {
        // console.log('e', e.target.value);
        let update = [{ ...posts }]

        update[i] = e.target.value
        console.log('check', update)
        setPosts(update)
        // console.log('data', posts);
        // setPosts({ ...posts, [e.target.item]: e.target.value });
    };

    const handleSubmit = (item, i) => e => {
        // let updateParent = [...category.currentParent]

        // updateParent.push(event.target.value)


        // setParent({ updateParent, parent: '' })
        let saveData = localStorage.setItem('posts', JSON.stringify(posts))
        console.log(posts, 'posts');
        setPosts(saveData)
    }

    const getData = () => {
        // let updateParent = [...category.currentParent]

        // updateParent.push(event.target.value)


        // setParent({ updateParent, parent: '' })
        let readData = localStorage.getItem('posts')
        console.log('read post', readData);
        const data = JSON.parse(readData) || [];
        console.log('load post', data);
        setPosts(data)

        // let readCategory = localStorage.getItem('categories')
        // console.log('read category', readCategory);
        // const value = JSON.parse(readCategory) || [];
        // console.log('load category', value);
        // setCategories(value)
    }

    // const retrieveData = () => {

    // };

    const handleModel = () => { setShow(false); };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleOpen = () => {
        storage();
        setOpen(true);
    };




    return (
        <>
            <br />
            {/* <Button variant="contained" onClick={handleClickOpen} >
                Add new post
                 <PostForm/>
            </Button> */}



            <PostForm
                callBack={x => {


                    console.log('user name', x)
                   
                    setPosts(x)
                }}
            />
            <br />

            {
                !posts.length == 0 ?
                    <List>
                        {posts.map((item, i) => {
                            return (
                                <span key={i} >
                                    <ListItem >
                                        <ListItemText variant="h6">
                                            {i + 1}{") "}{item.title}
                                        </ListItemText>
                                    </ListItem>
                                </span>
                            )
                        })}
                        {/* {values.name ?

                        <>
                            <ListItem>
                                <ListItemText primary={val.name} />
                            </ListItem>
                        </>

                        :
                        " could not read it"
                    } */}
                    </List>
                    :
                    "nothing found"
            }




        </>
    );
}
