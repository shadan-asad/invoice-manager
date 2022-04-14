import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../App.css';
import TextField from "@mui/material/TextField";
import AddInvo from './addInvo';
import EditInvo from './editInvo';
import DeleteInvo from './deleteInvo';
import AdvanceSearch from './advanceSearch';
import axios from 'axios';

export default function Navbar(selectionModel, invo_curr, cust_pt, docu_id) {

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

    const getPrediction = async() => {
        
        let docArr = [];
        selectionModel.selectionModel.forEach(element => {
            if(docArr.indexOf(selectionModel.data[element-1]["doc_id"]) == -1) {
                docArr.push(selectionModel.data[element-1]["doc_id"])
            }
        });
    
        let response = await axios.post("http://127.0.0.1:5000/get_prediction", {data: docArr}, {
            type: "application/json",
        });
        console.log(response[0])
        let mydata = response[0]

        let str = '';
        for(let key in mydata) {
            str += key + "=" + mydata[key] + "&"
        }
        str = str.substring(0, str.length - 1);
        let docUpdate = await axios.post("http://localhost:8080/highradius/updateAgingBucket?"+str);
        console.log("java resp: "+docUpdate);

    }

    return (
        <div>
            <AddInvo open={open} handleClose={ handleClose }/>
            <EditInvo openEdit={openEdit} editClose={ editClose } selectionModel={selectionModel} invo_curr={selectionModel.invo_curr} cust_pt={selectionModel.cust_pt} />
            <DeleteInvo openDelete={openDelete} deleteClose={ deleteClose } selectionModel={selectionModel}/>
            <AdvanceSearch advSearch={advSearch} advSearchClose={ advSearchClose } selectionModel={selectionModel}/>
            <div className='navbar'>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button className='button' variant='contained' onClick={getPrediction}>Predict</Button>
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