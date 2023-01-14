import { Box, Button, ButtonGroup, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <Box
        display='flex'
        justifyContent='center'
        position='sticky'
        top={"calc(50% - 20rem)"}>
        <Box bgcolor='white' p={2} borderRadius='1.5rem' marginTop={4}>
          <Typography
            textAlign='center'
            fontWeight='700'
            textTransform='uppercase'
            paddingTop={4}>
            Register Form
          </Typography>
          <form>
            <Stack p={4} gap='1.1rem'>
              <TextField
                helperText='Please enter your Name'
                id='demo-helper-text-misaligned'
                label='Name'
              />
              <TextField
                helperText='Please enter your Email'
                id='demo-helper-text-misaligned'
                label='Email'
              />
              <TextField
                helperText='Please enter your PassWord'
                id='demo-helper-text-misaligned'
                label='PassWord'
              />
              <ButtonGroup
                fullWidth
                variant='contained'
                aria-label='outlined primary button group'>
                <Button>Submit</Button>
                <Button sx={{ width: "20%" }}></Button>
              </ButtonGroup>
              <Typography variant='h6' fontSize='0.8rem'>
                Already Have an Account{" "}
                <Link to='/Login' color='red'>
                  Login
                </Link>
              </Typography>
            </Stack>
          </form>
        </Box>
      </Box>
    );
};

export default Register;