import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputLeftAddon,
  Input,
  Textarea,
  Text,
  Image,
  HStack,
  VStack,
  Box,
  Button,
  Select,
  Center,
} from "@chakra-ui/react";

const AddPostModal = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Nature");
  const [checkImage, setCheckImage] = useState(false);
  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const addPost = () => {
    fetch("https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorize: sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: title,
        image: image,
        username: sessionStorage.getItem("username"),
        postsDescription: description,
        userId: sessionStorage.getItem("userId"),
        type : type
      }),
    });
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalBody>
          <HStack spacing="10">
            <Box borderWidth="1px" borderRadius="lg">
              <Image src={image} w="200px" h="500px"/>
            </Box>
            <Box>
              <VStack>
                <Box>
                  <InputGroup fontFamily="Raleway">
                    <InputLeftAddon children={"Image Link"} />
                    <Input type="Text" value={image} onChange={handleImage} />
                  </InputGroup>
                </Box>
                <Box w="300px">
                  <InputGroup>
                    <InputLeftAddon children={"Title"} />
                    <Input type="Text" onChange={handleTitle} />
                  </InputGroup>
                </Box>
                <Box w="300px">
                  <Text mb="8px" fontFamily="Raleway">
                    Description:
                  </Text>
                  <Textarea value={description} onChange={handleDescription} />
                </Box>
                <Box>
                  <Select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    w="300px"
                  >
                    <option value="nature">Nature</option>
                    <option value="wallpaper">Wallpaper</option>
                    <option value="locations">Locations</option>
                    <option value="potraits">Potraits</option>
                    <option value="animals">Animals</option>
                  </Select>
                </Box>
                <Box></Box>
                <Box>
                  <Button onClick={addPost}>Post</Button>
                </Box>
              </VStack>
            </Box>
          </HStack>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddPostModal;
