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
  Text,
  Toast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  useToast,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { MdPersonOutline } from "react-icons/md";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import UserPool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

function Signup() {
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [confirmShow, setCShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const toast = useToast();
  const toastId = "id";

  const handleClick = () => setShow(!show);
  const handleCClick = () => setCShow(!confirmShow);
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const closeModal = () => {
    onClose();
    window.location.reload();
  };

  const signUp = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      if (!toast.isActive(toastId)) {
        toast({
          toastId,
          title: "Passwords do not match",
          description: "Please try again",
          status: "error",
          duration: 5000,
        });
      } else if (
        username == "" ||
        password == "" ||
        email == "" ||
        confirmPassword == ""
      ) {
        toast({
          title: "Please enter your details",
          description: "Please try again",
          status: "error",
          duration: 5000,
        });
      }
      setPassword("");
      setConfirmPassword("");
    } else {
      UserPool.signUp(
        username,
        password,
        [
          {
            Name: "email",
            Value: email,
          },
        ],
        null,
        async (err, data) => {
          if (data) {
            try {
              await fetch(
                "https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/register",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                  },
                  body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email,
                    profilePicture:
                      "https://image.pngaaa.com/784/4877784-middle.png",
                  }),
                }
              );
              onOpen();
            } catch (err) {
              console.log(err);
            }
          } else if (err) {
            console.log(err);
            switch (err.code) {
              case "UsernameExistsException":
                if (!toast.isActive(toastId)) {
                  toast({
                    toastId,
                    title: "Username already exists",
                    description: "Please try again",
                    status: "error",
                    duration: 5000,
                  });
                }
                break;
              case "InvalidParameterException":
                if (!toast.isActive(toastId)) {
                  toast({
                    toastId,
                    title: "Missing details",
                    description: "Please try again",
                    status: "error",
                    duration: 5000,
                  });
                }
                break;
              case "InvalidPasswordException":
                if (!toast.isActive(toastId)) {
                  toast({
                    toastId,
                    title: "Invalid password",
                    description: "Please try again",
                    status: "error",
                    duration: 5000,
                  });
                }
                break;
              default:
                if (!toast.isActive(toastId)) {
                  toast({
                    toastId,
                    title: "Error",
                    description: "Please try again",
                    status: "error",
                    duration: 5000,
                  });
                }
            }
          }
        }
      );
    }
  };

  const onConfirmation = (e) => {
    e.preventDefault();
    const userData = {
      Username: username,
      Pool: UserPool,
    };
    const user = new CognitoUser(userData);
    if (user) {
      user.confirmRegistration(code, true, (err, data) => {
        if (data) {
          onClose();
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          setEmail("");
          if (!toast.isActive(toastId)) {
            toast({
              toastId,
              title: "Account created",
              description: "Please log in",
              status: "success",
              duration: 5000,
            });
          }
        } else if (err) {
          console.log(err);
          if (!toast.isActive(toastId)) {
            toast({
              toastId,
              title: "Error",
              description: "Please try again",
              status: "error",
              duration: 5000,
            });
          }
        }
      });
    }
  };
  return (
    <>
      <Box p="40">
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
                  <Input
                    placeholder="Username"
                    size="lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </InputGroup>
              </Box>
              <Box p="2" ml="15px" mr="15px">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon color="grey.300" />}
                  />
                  <Input
                    placeholder="Email"
                    size="lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              <Box p="2" ml="15px" mr="15px">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<LockIcon color="grey.300" />}
                  />
                  <Input
                    placeholder="Confirm Password"
                    size="lg"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type={confirmShow ? "text" : "password"}
                  />
                  <InputRightElement width="4.5rem">
                    <IconButton
                      mt="5px"
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
                <VStack>
                  <Box>
                    <HStack></HStack>
                  </Box>
                </VStack>
              </Center>
              <Center>
                <Box p="1">
                  <Text>
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                      }}
                    >
                      Login
                    </Link>
                  </Text>
                </Box>
              </Center>
              <Center>
                <Button p="5" onClick={signUp}>
                  Sign Up
                </Button>
              </Center>
            </Box>
          </Center>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <FormControl>
            <ModalContent>
              <ModalHeader>Account Created!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  Account has been created! We have sent a confirmation code to
                  your email.
                </Text>
                <br />
                <Text mb={2}>Please enter the code below:</Text>
                <Input
                  type="number"
                  value={code}
                  required
                  onChange={(e) => setCode(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" mr={3} onClick={closeModal}>
                  Close
                </Button>
                <Button
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  onClick={onConfirmation}
                >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </FormControl>
        </ModalOverlay>
      </Modal>
    </>
  );
}

export default Signup;
