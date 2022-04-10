import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../App.css';
import TextField from "@mui/material/TextField";
import AddInvo from './addInvo';
import EditInvo from './editInvo';
import DeleteInvo from './deleteInvo';
import AdvanceSearch from './advanceSearch';

export default function Navbar(selectionModel) {

    const [open, setOpen] = React.useState(false);
    const [openEdit, setEdit] = React.useState(false);
    const [openDelete, setDelete] = React.useState(false);
    const [advSearch, setAdvSearch] = React.useState(false);

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

    const deleteHandler = () => {
        setDelete(true);
    }

    const deleteClose = () => {
        setDelete(false);
    }

    const advSearchHandler = () => {
        setAdvSearch(true);
    }

    const advSearchClose = () => {
        setAdvSearch(false);
    }
    return (
        <div>
            <AddInvo open={open} handleClose={ handleClose }/>
            <EditInvo openEdit={openEdit} editClose={ editClose }/>
            <DeleteInvo openDelete={openDelete} deleteClose={ deleteClose } selectionModel={selectionModel}/>
            <AdvanceSearch advSearch={advSearch} advSearchClose={ advSearchClose }/>
            <div className='navbar'>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button className='button' variant='contained'>Predict</Button>
                    <Button className='button'>Analytics View</Button>
                    <Button className='button' onClick={advSearchHandler}>Advance Search</Button>
                </ButtonGroup>
                <ButtonGroup className='search' variant="outlined" aria-label="outlined button group">
                    <TextField className='search' id="outlined-basic" label="Search Customer ID" variant="outlined" size='small'></TextField>
                </ButtonGroup>   
                <ButtonGroup className='bg2' variant="outlined" aria-label="outlined button group">
                    <Button className='button' onClick={addHandler}>Add</Button>
                    <Button className='button' onClick={editHandler} disabled='true'>Edit</Button>
                    <Button className='button' onClick={deleteHandler}>Delete</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}