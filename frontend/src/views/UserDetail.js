import React, { useEffect, useState } from 'react';
import {
  Box, CircularProgress, Grid, Typography, Paper, Button,
} from '@mui/material';
import { useHistory } from 'react-router';
import axios from 'axios';

function UserDetail(props) {
  const [details, setDetails] = useState(null);
  const history = useHistory();

  const { location } = props;

  async function getUserDetail() {
    const res = await axios.get(`/users/${location.state.email}`);
    setDetails(res.data);
  }

  useEffect(() => {
    getUserDetail();
  }, []);

  if (!details) {
    return (
      <CircularProgress align="center" />
    );
  }

  return (
    <Grid container justifyContent="center">
      <Box sx={{ display: 'flex' }}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography align="center" component="h2" variant="h6" color="primary" gutterBottom>
            User Details
          </Typography>
          <Typography variant="subtitle1">
            Name -
            {' '}
            {details.name}
          </Typography>
          <Typography variant="subtitle1">
            Email -
            {' '}
            {details.email}
          </Typography>
          <Typography variant="subtitle1">
            Address -
            {' '}
            {details.address}
          </Typography>
          <Typography variant="subtitle1">
            Country -
            {' '}
            {details.country}
          </Typography>
          <Button variant="contained" onClick={() => history.push('/')}>Home</Button>
        </Paper>
      </Box>
    </Grid>
  );
}

export default UserDetail;
