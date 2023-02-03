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
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { MdPersonOutline } from "react-icons/md";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
import { useContext } from "react";

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
  const toast = useToast();

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setInput(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setInputP(e.target.value);
  };

  let isError = false;
  let isErrorP = false;
  //const authenticate = useContext(AccountContext);

  //post data into api gateway
  const login = (e) => {
    e.preventDefault();
    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });
    const authDetials = new AuthenticationDetails({
      Username: username,
      Password: password,
    });
    user.authenticateUser(authDetials, {
      onSuccess: async (data) => {
        toast({
          title: "Login Success",
          description: "You have successfully logged in",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        console.log("onSuccess: ", data);
        const response = await fetch(
          "https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              email: username,
              password: password,
            }),
          }
        )
        const apiData = await response.json();
        console.log(apiData);
        for(const user of apiData){
          sessionStorage.setItem("userId", user.id);
        }
        // setUsers(apiData);
        // sessionStorage.setItem("users", apiData.data.body);
        console.log(users);
        // console.log(userData);
        window.location.href = "/";
      },
      onFailure: (err) => {
        toast({
          title: "Login Failed",
          description: "Please check your username and password",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        console.error("onFailure: ", err);
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        delete userAttributes.email_verified;
        user.completeNewPasswordChallenge(password, userAttributes, this);
      },
    });

    // const users = sessionStorage.setItem("users", users[0]);
    // const checkId = sessionStorage.getItem("userId");
    // if (checkId != null) {
    //   const navigate = useNavigate();
    //   navigate("/home");
    // } else {
    //   setShowAlert(true);
    // }
  };
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
                      placeholder="Username or Email"
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
                <Button p="5" h="10px" onClick={login}>
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
