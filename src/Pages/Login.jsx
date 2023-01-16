import { Button, Center, Input } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Box>
      <Box>
        <Center>
          <Box borderWidth='1px'>
            <Headers>Login</Headers>
            <Box p = '10'>
              <Input placeholder='Usernmae' size = 'lg'/>
            </Box>
            <Box p = '10'>
              <Input placeholder='Password' size = 'lg'/>
            </Box>
            <Button p = '10'>
              Login
            </Button>
            <Box p = '1'>
              Don't have an account?<Link to = '/signup'>Register here!</Link>
            </Box>
          </Box>
        </Center>
      </Box>
    </Box>
  )
}

export default Login
