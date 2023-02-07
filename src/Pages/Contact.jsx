import { Box, Center, HStack, InputGroup, InputLeftAddon, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const sendEmail = () => {
    emailjs.send("service_5qq5fyw","template_quisxhl",{
      to_name: `Mr/Ms ${firstName} ${lastName}`,
      from_name: "ang.jiawei56@gmail.com",
      message: `Hello, we have recieved your feed back for the issue ${description} and we will get back to you as soon as possible. Thank you for your patience. `,
      email: email,
      reply_to: "ang.jiawei56@gmail.com",
      });
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
              <Center><Button onClick={sendEmail}>Submit</Button></Center>
            </Box>
        </Center>  
       </Box>
      </HStack>
    </div>
  )
}

export default Contact
