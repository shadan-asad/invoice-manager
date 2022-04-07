import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Grid from '@mui/material/Grid'


import '../App.css'

export default function AddInvo({open, handleClose}) {
  const [clearDate, setClearDate] = React.useState(null);
  const [postingDate, setPostingDate] = React.useState(null);
  const [documentCreateDate, setDocumentCreateDate] = React.useState(null);
  const [dueDate, setDueDate] = React.useState(null);
  const [baselineCreateDate, setBaselineCreateDate] = React.useState(null);

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
            <TextField id="outlined-basic" label="Business Code" variant="outlined" />
            <TextField id="outlined-basic" label="Customer Number" variant="outlined" type="number"/>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Clear Date"
                value={clearDate}
                onChange={(newValue) => {
                  setClearDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField id="outlined-basic" label="Business Year" variant="outlined" type="number"/>
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            <TextField id="outlined-basic" label="Document ID" variant="outlined" />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Posting Date"
                value={postingDate}
                onChange={(newValue) => {
                  setPostingDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DatePicker
                label="Document Create Date"
                value={documentCreateDate}
                onChange={(newValue) => {
                  setDocumentCreateDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DatePicker
                label="Due Date"
                value={dueDate}
                onChange={(newValue) => {
                  setDueDate(newValue);
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
            <TextField id="outlined-basic" label="Invoice Currency" variant="outlined" />
            <TextField id="outlined-basic" label="Document Type" variant="outlined" />
            <TextField id="outlined-basic" label="Posting ID" variant="outlined" type="number"/>
            <TextField id="outlined-basic" label="Total Open Amount" variant="outlined" type="number"/>
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
                value={baselineCreateDate}
                onChange={(newValue) => {
                  setBaselineCreateDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField id="outlined-basic" label="Customer Payment Terms" variant="outlined" />
            <TextField id="outlined-basic" label="Invoice ID" variant="outlined" type="number"/>
          </Box>
        </DialogContent>
      </div>
      <div className='btnGrp'>
        <Button className='addButton' variant="outlined" onClick={handleClose}>Add</Button>
        <Button className='addButton' variant="outlined" onClick={handleClose}>Cancel</Button>    
      </div>
      </Dialog>
    </div>
  );
}
