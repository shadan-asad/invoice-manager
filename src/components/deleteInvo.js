import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import axios from 'axios';

import '../App.css'
import { getData } from '../services/data';

export default function DeleteInvo({openDelete, deleteClose, selectionModel}) {
    
  const deleteData = async() => {
    
    if(selectionModel.selectionModel.length > 0) {
      let delList = [];
      for(let key in selectionModel) {
        delList.push(selectionModel[key]);
      }

      let data = "sl_no="+delList[0];
      
      let response = await axios.get('http://localhost:8080/highradius/delete?'+data);
      console.log("Is deleted: "+response.data);

      if(response.data == true) {
        selectionModel.setData(await getData())
      }
    }
  }

  return (
    <div>
      <Dialog
        open={openDelete}
        onClose={deleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Records ?"}
        </DialogTitle>
      <div>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            Are you sure you want to delete these record[s] ?
            </Box>
        </DialogContent>
      </div>
      <div className='btnGrp'>
        <Button className='addButton' variant="outlined" onClick={ deleteClose }>Cancel</Button>
        <Button className='addButton' variant="outlined" onClick={() => { deleteData(); deleteClose(); }} type='submit'>Delete</Button>
      </div>
      </Dialog>
    </div>
  );
}
