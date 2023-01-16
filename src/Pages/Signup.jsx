import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Box>
      <Box>
        <Center>
          <Box borderWidth="1px">
            <Headers>Login</Headers>
            <Box p="2">
              <Input placeholder="Usernmae" size="lg" />
            </Box>
            <Box p="2">
              <Input placeholder="Email" size="lg" />
            </Box>
            <Box p="2">
              <Input placeholder="Password" size="lg" />
            </Box>
            <Box p="2">
              <Input placeholder="Confirm Password" size="lg" />
            </Box>
            <Box p="1">
              Already have an account? <Link to = '/login'>Login</Link>
            </Box>
            <Button p="5">Sign Up</Button>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Signup;
