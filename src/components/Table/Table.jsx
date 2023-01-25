import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'


function createData(name, TrackingId, date, status) {
  return { name, TrackingId, date, status };
}

const rows = [
  createData('Frozen yoghurt', 159, "23 october 2022", "Approved"),
  createData('Ice cream sandwich', 237,"23 october 2022", "Pending"),
  createData('Eclair', 262,"23 october 2022", "Approved"),
  createData('Gingerbread', 500,"23 october 2022", "Delivered"),
];

const makeStyles =(status)=>{
      if(status === 'Approved'){
        return{
          background: 'rgb(145 254 159 / 47%)',
          color: 'green',
        }
      } else if(status === 'Pending'){
        return{
          background: '#ffadad8f',
          color: 'red',
        }
      } else {
        return{
          background: '#59bfff',
          color: 'white',
      }}
}

export default function BasicTable() {
  return (
    <div className="Table"> 
    <h3>Recent Orders</h3>
    <TableContainer component={Paper}
    style={{boxShadow:'0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking Id</TableCell>
            <TableCell align="left">date</TableCell>
            <TableCell align="left">status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.TrackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span
                className='status' style={makeStyles(row.status)}
                  >{row.status}
                  </span>
              </TableCell>
              <TableCell align="left" className='Details'>Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>   
    </div>
  );
}
