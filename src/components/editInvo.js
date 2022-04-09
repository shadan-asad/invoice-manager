import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import axios from 'axios';

import '../App.css'

export default function EditInvo({openEdit, editClose}) {

  const [invoice_currency, setinvoice_currency] = React.useState('');
  const [cust_payment_terms, setcust_payment_terms] = React.useState('');
  
  const editData = async() => {

    let data = "invoice_currency=" + invoice_currency + "&cust_payment_terms=" + cust_payment_terms;
    let response = await axios.get('http://localhost:8080/highradius/edit?'+data);
    console.log(response.data)
  }

  return (
    <div>
      <Dialog
        open={openEdit}
        onClose={editClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit"}
        </DialogTitle>
      <div>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            <TextField id="outlined-basic" label="Invoice Currency" variant="outlined" onChange={(e) => setinvoice_currency(e.target.value)}/>
            <TextField id="outlined-basic" label="Customer Payment Terms" variant="outlined" onChange={(e) => setcust_payment_terms(e.target.value)}/>
          </Box>
        </DialogContent>
      </div>
      <div className='btnGrp'>
        <Button className='addButton' variant="outlined" onClick={() => { editData(); editClose(); }} type='submit'>Edit</Button>
        <Button className='addButton' variant="outlined" onClick={ editClose }>Cancel</Button>    
      </div>
      </Dialog>
    </div>
  );
}
