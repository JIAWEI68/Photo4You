import {
  Button,
  Center,
  Input,
  Box,
  Heading,
  InputGroup,
  InputLeftElement,
  Container,
  InputRightElement,
  IconButton,
  Icon,
  Text,
  AlertDialog,
  useDisclosure,
  AlertDialogContent,
  Alert
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showAlert, setShowAlert] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //post data into api gateway
  async function login(){
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    setUsers(data);
    const userId = sessionStorage.setItem("userId", users[0].id);
    const users = sessionStorage.setItem("users", users[0]);
    if(userId != null){
      window.location.href = "/home";
    }
    else{
      setShowAlert(true);
    }
    
  };
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
                  <Input
                    placeholder="Username"
                    size="lg"
                    value={username}
                    onChange={handleUsername}
                  />
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
                    value={password}
                    onChange={handlePassword}
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
                <Button p="5" h="10px" onClick={login()}>
                  Login
                </Button>
              </Center>
              <Center>
                <Box p="1">
                  <Text>
                    New to the website?{" "}
                    <Link
                      to="/signup"
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                      }}
                    >
                      Sign Up
                    </Link>
                  </Text>
                </Box>
              </Center>
            </Box>
          </Center>
        </Box>
      </Box>
      {showAlert ? (
        <Alert>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Password/ Email is not correct
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </Alert>) : null}
    </Container>
  );
}

export default Login;
