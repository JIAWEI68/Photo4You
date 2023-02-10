import {
  Box,
  Center,
  HStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Textarea,
  useToast,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();
  const sendEmail = async(e) => {
    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      from_name: "Photo4You",
      message: description,
      email: email,
      reply_to: "ang.jiawei56@gmail.com",
    };
    const templateParams2 = {
      to_name: `jw`,
      from_name: "Photo4You",
      message: description,
      email: email,
      reply_to: "",
    };
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
        await emailjs.send(
          "service_5qq5fyw",
          "template_y63zpgv",
          templateParams,
          "l7CUySFkN1Z7OEdrY"
        );
        await emailjs.send(
          "service_5qq5fyw",
          "template_quisxhl",
          templateParams2,
          "l7CUySFkN1Z7OEdrY"
        );
        await fetch(
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
        window.location.reload();
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
    <div className="form">
      <Center my="40">
        <HStack spacing={10}>
          <Box mx="40">
            <Box>
              <Text fontSize={30} color={"#00C65A"} fontFamily="Raleway">
                Require Assistance?
              </Text>
              <Text fontFamily="Raleway">
                Contact us by filling in this form with your inquiries!
              </Text>
            </Box>
          </Box>

          <VStack>
            <Box>
              <HStack>
                {" "}
                <Box>
                  <Text fontFamily="Raleway">First Name</Text>
                  <InputGroup>
                    <Input
                      onChange={(e) => setFirstName(e.target.value)}
                      fontFamily="Raleway"
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <Text fontFamily="Raleway">Last Name</Text>
                  <InputGroup>
                    <Input onChange={(e) => setLastName(e.target.value)} fontFamily="Raleway" />
                  </InputGroup>
                </Box>
              </HStack>
              <Box my="4">
                <Text fontFamily="Raleway">Email</Text>
                <InputGroup>
                  <Input onChange={(e) => setEmail(e.target.value)} fontFamily="Raleway"/>
                </InputGroup>
              </Box>
              <Box>
                <Text fontFamily="Raleway">Description</Text>
                <InputGroup>
                  <Textarea onChange={(e) => setDescription(e.target.value)} fontFamily="Raleway"/>
                </InputGroup>
              </Box>
            </Box>
            <Box>
              <Center>
                <Button onClick={sendEmail} fontFamily="Raleway" bgColor={"#00C65A"}>Submit</Button>
              </Center>
            </Box>
          </VStack>
        </HStack>
      </Center>
    </div>
  );
};

export default Contact;
