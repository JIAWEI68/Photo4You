import {
  InputGroup,
  InputLeftElement,
  Box,
  Center,
  Icon,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MdPersonOutline } from "react-icons/md";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

const Signup = () => {
  return (
    <Box>
      <Box>
        <Center>
          <Box borderWidth="1px">
            <Heading>Sign Up</Heading>
            <Box p="2">
              <InputGroup>
                <InputLeftElement>
                  <Icon as={MdPersonOutline} boxSize={6} />
                </InputLeftElement>
                <Input placeholder="Username" size="lg" />
              </InputGroup>
            </Box>
            <Box p="2">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="grey.300" />}
                />
                <Input placeholder="Email" size="lg" />
              </InputGroup>
            </Box>
            <Box p="2">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="grey.300" />}
                />
                <Input placeholder="Password" size="lg" />
              </InputGroup>
            </Box>
            <Box p="2">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="grey.300" />}
                />
                <Input placeholder="Confirm Password" size="lg" />
              </InputGroup>
            </Box>
            <Box p="1">
              Already have an account? <Link to="/login">Login</Link>
            </Box>
            <Button p="5">Sign Up</Button>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Signup;
