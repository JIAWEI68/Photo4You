import {
  Button,
  Center,
  Input,
  Box,
  Link,
  Heading,
  InputGroup,
  InputLeftElement,
  Container,
  InputRightElement,
  IconButton,
  Icon,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Container centerContent mt="40">
      <Box>
        <Box>
          <Center>
            <Box borderWidth="2px" borderColor="black" h="330px">
              <Center>
                <Heading mt="10px">Login</Heading>
              </Center>
              <Box p="5" mt="10px">
                <InputGroup>
                  <InputLeftElement>
                    <Icon as={MdPersonOutline} boxSize={6} />
                  </InputLeftElement>
                  <Input placeholder="Username" size="lg" />
                </InputGroup>
              </Box>
              <Box p="5">
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
                      mt="5px"
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                      icon={show ? <ViewIcon /> : <ViewOffIcon />}
                      variant="none"
                    />
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Center>
                <Button p="5" h="10px">
                  Login
                </Button>
              </Center>
            </Box>
          </Center>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
