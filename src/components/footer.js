import * as React from 'react';
import Link from '@mui/material/Link';
import { Button, Grid } from '@mui/material';
import { TextFormat } from '@mui/icons-material';
import { color } from '@mui/system';
import '../App.css';

export default function Footer() {
  return (
    <div className='footer'>
    <p style={{color: "black", justifyContent: "center", alignContent: "center"}}> <Link>Privacy Policy</Link> | 2022 HighRadius Corporation. All rights reserved. </p>
    
    </div>
  );
}
