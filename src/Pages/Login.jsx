import {
  Button,
  Center,
  Input,
  Box,
  Link,
  Heading,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { MdPersonOutline } from "react-icons/md";
import { LockIcon } from "@chakra-ui/icons";

const Login = () => {
  return (
    <Box>
      <Box>
        <Center>
          <Box borderWidth="1px">
            <Heading>Login</Heading>
            <Box p="10">
              <InputGroup>
                <InputLeftElement>
                  <Icon as={MdPersonOutline} boxSize={6} />
                </InputLeftElement>
                <Input placeholder="Username" size="lg" />
              </InputGroup>
            </Box>
            <Box p="10">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="grey.300" />}
                />
                <Input placeholder="Password" size="lg" />
              </InputGroup>
            </Box>
            <Button p="10">Login</Button>
            <Box p="1">
              Don't have an account? <Link to="/signup">Register here!</Link>
            </Box>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Login;
