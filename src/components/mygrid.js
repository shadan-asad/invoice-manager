import * as React from 'react';
import '../App.css'
import { DataGrid } from '@mui/x-data-grid';
import { getData } from '../services/data';
import Navbar  from './navbar'

export default function MyGrid(hel) {
  
  const [pageSize, setPageSize] = React.useState(10);
  const [data, setData] = React.useState([]);
  const [checkboxSelection] = React.useState(true);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [invo_curr, setinvo_curr] = React.useState('');
  const [cust_pt, setcust_pt] = React.useState('');
  
  const updateEditValues = async(newSelectionModel) => {

    if(newSelectionModel.length == 1) {
      setinvo_curr(data[newSelectionModel-1].invoice_currency);
      setcust_pt(data[newSelectionModel-1].cust_payment_terms);
    } 
  
  }
  React.useEffect( async function() {
    setData(await getData());
  }, []);
  
  const cols = [ { field: 'sl_no', headerName: 'Sl No' }, { field: 'business_code', headerName: 'Business \nCode'}, 
                 { field: 'cust_number', headerName: 'Customer Number'}, { field: 'clear_date', headerName: 'Clear Date'}, 
                 { field: 'buisness_year', headerName: 'Business Year'}, { field: 'doc_id', headerName: 'Document ID'}, 
                 { field: 'posting_date', headerName: 'Posting Date'}, { field: 'document_create_date', headerName: 'Document Create Date'}, 
                 { field: 'due_in_date', headerName: 'Due Date'}, { field: 'invoice_currency', headerName: 'Invoice Currency'}, 
                 { field: 'document_type', headerName: 'Document Type'}, { field: 'posting_id', headerName: 'Posting ID'}, 
                 { field: 'total_open_amount', headerName: 'Total Open Amount'}, 
                 { field: 'baseline_create_date', headerName: 'Baseline Create Date'}, 
                 { field: 'cust_payment_terms', headerName: 'Customer Payment Terms'}, { field: 'invoice_id', headerName: 'Invoice ID'}];
  
  return (
    
    <div>
      <div style={{color: "white"}}>
        <Navbar 
          selectionModel = {selectionModel} 
          invo_curr = {invo_curr} 
          cust_pt = {cust_pt} 
          data = {data}
          setData = {setData}
          />
      </div>
        <div style={{ height: 500, color: "white"}}>
          <DataGrid 
            style = {{color: "white"}}
            rowHeight = {37.8} 
            pageSize = {pageSize} 
            onPageSizeChange = {(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions = {[10,25, 50, 100]}
            pagination
            checkboxSelection = {checkboxSelection} columns = {cols} rows = {data} getRowId = {(row) => row.sl_no} 
            onSelectionModelChange = {(newSelectionModel) => { setSelectionModel(newSelectionModel); updateEditValues(newSelectionModel); }}
          ></DataGrid>
         </div>
    </div>
  );
}
