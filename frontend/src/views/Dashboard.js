import React from 'react';

import { Grid } from '@mui/material';
import Users from './Users';

function Dashboard() {
  return (
    <Grid container justifyContent="center">
      <Users />
    </Grid>
  );
}

export default Dashboard;
