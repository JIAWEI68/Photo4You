import {
  Box,
  Center,
  HStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();
  const sendEmail = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      description === ""
    ) {
      toast({
        title: "Error",
        description: "Please fill in all the fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      try {
        emailjs.send("service_5qq5fyw", "template_y63zpgv", {
          to_name: `Mr/Ms ${firstName} ${lastName}`,
          from_name: "Photo4You",
          message: `Hello, we have recieved your feed back for the issue ${description} and we will get back to you as soon as possible. Thank you for your patience. `,
          email: email,
          reply_to: "ang.jiawei56@gmail.com",
        });
        emailjs.send("service_5qq5fyw", "template_quisxhl", {
          to_name: `jw`,
          from_name: "Photo4You",
          message: description,
          email: email,
          reply_to: "",
        });
        fetch(
          "https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email: email,
              description: description,
            }),
          }
        );
        toast({
          title: "Success",
          description: "Your message has been sent!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        console.log(error);
        toast({
          title: "Error",
          description: error,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <div>
      <HStack>
        <Box>
          <Center>
            <Box>
              <Text>
                <h1>Require Assistance?</h1>
              </Text>
              <Text>
                <h2>Contact us by filling in this form with your inquiries!</h2>
              </Text>
            </Box>
          </Center>
        </Box>
        <Box>
          <Center>
            <Box>
              <InputGroup>
                <InputLeftAddon children="First Name" />
                <Input onChange={(e) => setFirstName(e.target.value)} />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup>
                <InputLeftAddon children="Last Name" />
                <Input onChange={(e) => setLastName(e.target.value)} />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup>
                <InputLeftAddon children="Email" />
                <Input onChange={(e) => setEmail(e.target.value)} />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup>
                <InputLeftAddon children="Description" />
                <Textarea onChange={(e) => setDescription(e.target.value)} />
              </InputGroup>
            </Box>
            <Box>
              <Center>
                <Button onClick={sendEmail}>Submit</Button>
              </Center>
            </Box>
          </Center>
        </Box>
      </HStack>
    </div>
  );
};

export default Contact;
