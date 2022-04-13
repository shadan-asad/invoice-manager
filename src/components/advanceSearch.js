import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import axios from 'axios';

import '../App.css'

export default function AdvanceSearch({advSearch, advSearchClose}) {

  const [doc_id, setdoc_id] = React.useState('');
  const [invoice_id, setinvoice_id] = React.useState('');
  const [cust_number, setcust_number] = React.useState('');
  const [buisness_year, setbuisness_year] = React.useState('');
  
  const searchData = async() => {

    let data = "doc_id=" + doc_id + "&invoice_id=" + invoice_id + "&cust_number=" + cust_number + "&buisness_year=" + buisness_year;
    let response = await axios.get('http://localhost:8080/highradius/search?'+data);
    console.log(data)
    console.log(response.data);
    setData(response.data);
  }

  return (
    <div>
      <Dialog
        open={advSearch}
        onClose={advSearchClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          {"Advance Search"}
        </DialogTitle>
      <div>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            <TextField id="outlined-basic" label="Document ID" variant="outlined" onChange={(e) => setdoc_id(e.target.value)}/>
            <TextField id="outlined-basic" label="Invoice ID" variant="outlined" type="number" onChange={(e) => setinvoice_id(e.target.value)}/>
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            <TextField id="outlined-basic" label="Customer Number" variant="outlined" type="number" onChange={(e) => setcust_number(e.target.value)}/>
            <TextField id="outlined-basic" label="Business Year" variant="outlined" type="number" onChange={(e) => setbuisness_year(e.target.value)}/>
          </Box>
        </DialogContent>
      </div>
      <div className='btnGrp'>
        <Button className='addButton' variant="outlined" onClick={() => { searchData(); advSearchClose(); }} type='submit'>Search</Button>
        <Button className='addButton' variant="outlined" onClick={ advSearchClose }>Cancel</Button>    
      </div>
      </Dialog>
    </div>
  );
}
