import {
  InputGroup,
  InputLeftElement,
  Box,
  Center,
  Icon,
  Input,
  Button,
  Heading,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdPersonOutline } from "react-icons/md";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Signup() {
  const [show, setShow] = useState(false);
  const [confirmShow, setCShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleCClick = () => setCShow(!confirmShow);
  return (
    <Box p="39">
      <Box>
        <Center>
          <Box
            borderWidth="2px"
            borderColor="black"
            height="450px"
            width="350px"
          >
            <Center>
              <Heading mt="15px">Sign Up</Heading>
            </Center>
            <Box p="2" ml="15px" mr="15px" mt="12px">
              <InputGroup>
                <InputLeftElement>
                  <Icon as={MdPersonOutline} boxSize={6} />
                </InputLeftElement>
                <Input placeholder="Username" size="lg" />
              </InputGroup>
            </Box>
            <Box p="2" ml="15px" mr="15px">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="grey.300" />}
                />
                <Input placeholder="Email" size="lg" />
              </InputGroup>
            </Box>
            <Box p="2" ml="15px" mr="15px">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="grey.300" />}
                />
                <Input
                  placeholder="Password"
                  size="lg"
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    icon={show ? <ViewIcon /> : <ViewOffIcon />}
                    variant="none"
                  />
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box p="2" ml="15px" mr="15px">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="grey.300" />}
                />
                <Input
                  placeholder="Confirm Password"
                  size="lg"
                  type={confirmShow ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    onClick={handleCClick}
                    icon={confirmShow ? <ViewIcon /> : <ViewOffIcon />}
                    variant="none"
                  />
                </InputRightElement>
              </InputGroup>
            </Box>
            <Center>
              <Box p="1">
                Already have an account?
                <Link
                  to="/login"
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                  }}
                >
                  Login
                </Link>
              </Box>
            </Center>
            <Center>
              <Button p="5">Sign Up</Button>
            </Center>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}

export default Signup;
