import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


import '../App.css'

export default function AddInvo({open, handleClose}) {
  
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
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            <TextField id="outlined-basic" label="Business Code" variant="outlined" />
            <TextField id="outlined-basic" label="Customer Number" variant="outlined" />
            <TextField id="outlined-basic" label="Business Year" variant="outlined" />
            <TextField id="outlined-basic" label="Business Year" variant="outlined" />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            <TextField id="outlined-basic" label="Document ID" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            <TextField id="outlined-basic" label="Invoice Currency" variant="outlined" />
            <TextField id="outlined-basic" label="Document Type" variant="outlined" />
            <TextField id="outlined-basic" label="Posting ID" variant="outlined" />
            <TextField id="outlined-basic" label="Total Open Amount" variant="outlined" />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Customer Payment Terms" variant="outlined" />
            <TextField id="outlined-basic" label="Invoice ID" variant="outlined" />
          </Box>
          <Stack spacing={2} direction="row">
            <Button className='button' variant="outlined">Add</Button>
            <Button className='button' variant="outlined">Cancel</Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
}
