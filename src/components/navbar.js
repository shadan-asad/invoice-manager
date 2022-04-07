import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../App.css';
import TextField from "@mui/material/TextField";
import AddInvo from './addInvo';

export default function Navbar() {

    const [open, setOpen] = React.useState(false);

    const addHandler = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AddInvo open={open} handleClose={handleClose }/>
            <div className='navbar'>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button className='button'>Predict</Button>
                    <Button className='button'>Analytics View</Button>
                    <Button className='button'>Advance Search</Button>
                </ButtonGroup>
                <ButtonGroup className='search' variant="outlined" aria-label="outlined button group">
                    <TextField className='search' id="outlined-basic" label="Search" variant="outlined" size='small'>Search</TextField>
                </ButtonGroup>   
                <ButtonGroup className='bg2' variant="outlined" aria-label="outlined button group">
                    <Button className='button' onClick={addHandler}>Add</Button>
                    <Button className='button'>Edit</Button>
                    <Button className='button'>Delete</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}