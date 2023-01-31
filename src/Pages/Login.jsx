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
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogContent,
  AlertDialogHeader,
  Alert,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { MdPersonOutline } from "react-icons/md";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [inputP, setInputP] = useState("");
  const handleClick = () => setShow(!show);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showAlert, setShowAlert] = useState(false);
  const userId = 0;

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setInput(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setInputP(e.target.value);
  };

  const isError = input === "";
  const isErrorP = inputP === "";

  //post data into api gateway
  async function login() {
    const response = await fetch(
      "https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/login",
      {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );
    const data = await response.json();
    setUsers(data);
    console.log(users);
    const userId = sessionStorage.setItem("userId", users[0].id);
    // const users = sessionStorage.setItem("users", users[0]);
    const checkId = sessionStorage.getItem("userId");
    if (checkId != null) {
      const navigate = useNavigate();
      navigate("/home");
    } else {
      setShowAlert(true);
    }
  }
  return (
    <Container centerContent mt="40" mb="40">
      <Box>
        <Box>
          <Center>
            <Box borderWidth="2px" borderColor="black" h="380px">
              <Center>
                <Heading mt="10px">Login</Heading>
              </Center>
              <FormControl isInvalid={isError}>
                <Box p="5" mt="10px">
                  <InputGroup>
                    <InputLeftElement mt="5px">
                      <Icon as={MdPersonOutline} boxSize={6} />
                    </InputLeftElement>
                    <Input
                      placeholder="Username"
                      size="lg"
                      value={username}
                      onChange={handleUsername}
                    />
                  </InputGroup>
                  {isError ? (
                    <FormLabel color="red">Username is required</FormLabel>
                  ) : null}
                </Box>
              </FormControl>
              <FormControl isInvalid={isErrorP}>
                <Box p="5">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      mt="4px"
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
                  {isErrorP ? (
                    <FormLabel color="red">Password is required</FormLabel>
                  ) : null}
                </Box>
              </FormControl>
              <Center>
                <Button p="5" h="10px" onClick={() => login()}>
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
      {/* {showAlert ? (
        <Alert>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Password/ Email is not correct
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </Alert>) : null} */}
    </Container>
  );
}

export default Login;
