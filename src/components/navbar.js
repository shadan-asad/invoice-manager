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
        if(selectionModel.selectionModel.length > 0) {
            setDelete(true);
        }
        
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

    const checkSelectionModel = (selectionModel) => {
        if(selectionModel.selectionModel.length == 1) {
            return false;
        }
        return true;
    }
    return (
        <div>
            <AddInvo open={open} handleClose={ handleClose }/>
            <EditInvo openEdit={openEdit} editClose={ editClose } selectionModel={selectionModel} invo_curr={selectionModel.invo_curr} cust_pt={selectionModel.cust_pt} />
            <DeleteInvo openDelete={openDelete} deleteClose={ deleteClose } selectionModel={selectionModel}/>
            <AdvanceSearch advSearch={advSearch} advSearchClose={ advSearchClose } selectionModel={selectionModel}/>
            <div className='navbar'>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button style={{color: "white"}} className='button' variant='contained'>Predict</Button>
                    <Button style={{color: "white"}} className='button'>Analytics View</Button>
                    <Button style={{color: "white"}} className='button' onClick={advSearchHandler}>Advance Search</Button>
                </ButtonGroup>
                <ButtonGroup style={{ backgroundColor: "white"}} className='search' variant="outlined" aria-label="outlined button group">
                    <TextField className='search' id="outlined-basic" label="Search Customer ID" variant="outlined" type="search" size='small'></TextField>
                </ButtonGroup>   
                <ButtonGroup className='bg2' variant="outlined" aria-label="outlined button group">
                    <Button style={{color: "white"}} className='button' onClick={addHandler}>Add</Button>
                    <Button style={{color: "white"}} className='button' onClick={editHandler} disabled={checkSelectionModel(selectionModel)}>Edit</Button>
                    <Button style={{color: "white"}} className='button' onClick={deleteHandler}>Delete</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}