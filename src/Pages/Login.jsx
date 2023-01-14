import LoginIcon from "@mui/icons-material/Login";
import {
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      position='sticky'
      top={"calc(50% - 15rem)"}>
      <Box bgcolor='white' p={2} borderRadius='1.5rem'>
        <Typography
          textAlign='center'
          fontWeight='700'
          textTransform='uppercase'
          paddingTop={4}>
          Login Form
        </Typography>
        <form>
          <Stack p={4} gap='1.1rem'>
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
              <Button sx={{ width: "20%" }}>
                <LoginIcon />
              </Button>
            </ButtonGroup>
            <Typography variant='h6' fontSize='0.8rem'>
              New Here
              <Link to='/register' color='primary'>
                Register
              </Link>
            </Typography>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
