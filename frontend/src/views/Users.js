import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
  CircularProgress,
} from '@mui/material';

import axios from 'axios';
import { Link } from 'react-router-dom';

function Users() {
  const [rows, setRows] = useState(null);

  async function fetchUsers() {
    const res = await axios.get('/users');
    setRows(res.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!rows) {
    return (
      <CircularProgress align="center" />
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography align="center" component="h2" variant="h6" color="primary" gutterBottom>
          Users
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Country</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.email}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>
                  <Link to={{ pathname: '/details', state: { email: row.email } }}>
                    <Button variant="contained" size="small">
                      Details
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default Users;
