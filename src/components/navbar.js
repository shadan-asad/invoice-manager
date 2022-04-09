import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../App.css';
import TextField from "@mui/material/TextField";
import AddInvo from './addInvo';
import EditInvo from './editInvo';

export default function Navbar() {

    const [open, setOpen] = React.useState(false);
    const [openEdit, setEdit] = React.useState(false);

    const addHandler = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };

    const editHandler = () => {
        setEdit(true);
    }

    const editClose = () => {
        setEdit(false);
    }
    return (
        <div>
            <AddInvo open={open} handleClose={ handleClose }/>
            <EditInvo openEdit={openEdit} editClose={ editClose }/>
            <div className='navbar'>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button className='button'>Predict</Button>
                    <Button className='button'>Analytics View</Button>
                    <Button className='button'>Advance Search</Button>
                </ButtonGroup>
                <ButtonGroup className='search' variant="outlined" aria-label="outlined button group">
                    <TextField className='search' id="outlined-basic" label="Search" variant="outlined" size='small'>Search Customer ID</TextField>
                </ButtonGroup>   
                <ButtonGroup className='bg2' variant="outlined" aria-label="outlined button group">
                    <Button className='button' onClick={addHandler}>Add</Button>
                    <Button className='button' onClick={editHandler}>Edit</Button>
                    <Button className='button'>Delete</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}