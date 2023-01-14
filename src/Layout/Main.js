import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
      <Box bgcolor='#a7bcff'>
        <Stack sx={{ minHeight: "100vh" }}>
          <Outlet></Outlet>
        </Stack>
      </Box>
    );
};

export default Main;