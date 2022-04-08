import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import axios from 'axios';

import '../App.css'

export default function AddInvo({open, handleClose}) {
  const [business_code, setbusiness_code] = React.useState('');
  const [cust_number, setcust_number] = React.useState('');
  const [buisness_year, setbuisness_year] = React.useState('');
  const [doc_id, setdoc_id] = React.useState('');
  const [invoice_currency, setinvoice_currency] = React.useState('');
  const [document_type, setdocument_type] = React.useState('');
  const [posting_id, setposting_id] = React.useState('');
  const [total_open_amount, settotal_open_amount] = React.useState('');
  const [cust_payment_terms, setcust_payment_terms] = React.useState('');
  const [invoice_id, setinvoice_id] = React.useState('');

  const [clear_date, setclear_date] = React.useState(null);
  const [posting_date, setposting_date] = React.useState(null);
  const [document_create_date, setdocument_create_date] = React.useState(null);
  const [due_date, setdue_date] = React.useState(null);
  const [baseline_create_date, setbaseline_create_date] = React.useState(null);

  
  const postData = async() => {

    let data = "business_code=" + business_code + "&cust_number=" + cust_number + "&buisness_year=" + buisness_year + "&doc_id=" + doc_id
               + "&invoice_currency=" + invoice_currency + "&posting_id=" + posting_id + "&total_open_amount=" + total_open_amount 
               + "&cust_payment_terms=" + cust_payment_terms  + "&invoice_id=" + invoice_id  + "&clear_date=" + clear_date  
               + "&document_create_date=" +  document_create_date + "&posting_date=" +  posting_date + "&due_date=" + due_date  
               + "&baseline_create_date=" +  baseline_create_date + "&document_type=" + document_type;
    let response = await axios.get('http://localhost:8080/highradius/insert?'+data);
    console.log(response.data)
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Invoice"}
        </DialogTitle>
      <div>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            <TextField id="business_code" label="Business Code" variant="outlined" onChange={(e) => setbusiness_code(e.target.value)}/>
            <TextField id="outlined-basic" label="Customer Number" variant="outlined" type="number" onChange={(e) => setcust_number(e.target.value)}/>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Clear Date"
                value={clear_date}
                onChange={(newValue) => {
                  setclear_date(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField id="outlined-basic" label="Business Year" variant="outlined" type="number" onChange={(e) => setbuisness_year(e.target.value)}/>
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            <TextField id="outlined-basic" label="Document ID" variant="outlined" onChange={(e) => setdoc_id(e.target.value)}/>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Posting Date"
                value={posting_date}
                onChange={(newValue) => {
                  setposting_date(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DatePicker
                label="Document Create Date"
                value={document_create_date}
                onChange={(newValue) => {
                  setdocument_create_date(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DatePicker
                label="Due Date"
                value={due_date}
                onChange={(newValue) => {
                  setdue_date(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            <TextField id="outlined-basic" label="Invoice Currency" variant="outlined" onChange={(e) => setinvoice_currency(e.target.value)}/>
            <TextField id="outlined-basic" label="Document Type" variant="outlined" onChange={(e) => setdocument_type(e.target.value)}/>
            <TextField id="outlined-basic" label="Posting ID" variant="outlined" type="number" onChange={(e) => setposting_id(e.target.value)}/>
            <TextField id="outlined-basic" label="Total Open Amount" variant="outlined" type="number" onChange={(e) => settotal_open_amount(e.target.value)}/>
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Baseline Create Date"
                value={baseline_create_date}
                onChange={(newValue) => {
                  setbaseline_create_date(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField id="outlined-basic" label="Customer Payment Terms" variant="outlined" onChange={(e) => setcust_payment_terms(e.target.value)}/>
            <TextField id="outlined-basic" label="Invoice ID" variant="outlined" type="number" onChange={(e) => setinvoice_id(e.target.value)}/>
          </Box>
        </DialogContent>
      </div>
      <div className='btnGrp'>
        <Button className='addButton' variant="outlined" onClick={() => { postData(); handleClose(); }} type='submit'>Add</Button>
        <Button className='addButton' variant="outlined" onClick={ handleClose }>Cancel</Button>    
      </div>
      </Dialog>
    </div>
  );
}
