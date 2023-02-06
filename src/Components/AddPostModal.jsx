import React, { useState } from 'react'
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
    Select
  } from '@chakra-ui/react'

const AddPostModal = () => {
  const [image , setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type , setType] = useState("Nature");
  const handleImage = (e) => {
    setImage(e.target.value);
  }
  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }
  const addPost = () => {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth" : sessionStorage.getItem("auth"),
      },
      body: JSON.stringify({
        title: title,
        image: image,
        username: sessionStorage.getItem("username"),
        postsDescription: description,
        userId : sessionStorage.getItem("userId"),

      }),
    });
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalBody>
          <HStack spacing="20">
            <Box>
              <Image src={image} />
            </Box>
            <Box>
              <VStack>
              <Box>
                 <InputGroup fontFamily="Raleway">
                   <InputLeftAddon children = {"Image Link"}/>
                   <Input type = "Text" value = {image} onChange = {handleImage}/>
                 </InputGroup>
                </Box>
                <Box>
                 <InputGroup>
                   <InputLeftAddon children = {"Title"}/>
                   <Input type = "Text" onChange={handleTitle}/>
                 </InputGroup>
                </Box>
                <Box ml ="50px">
                <Text mb = "8px" fontFamily="Raleway">Description:</Text>
                  <Textarea value = {description} onChange = {handleDescription}/>
                </Box>
                <Box>
                  <Select value = {type} onChange = {(e) => setType(e.target.value)}>
                    <option value="nature">Nature</option>
                    <option value="wallpaper">Wallpaper</option>
                    <option value="locations">Locations</option>
                    <option value="potraits">Potraits</option>
                    <option value="animals">Animals</option>
                  </Select>
                </Box>
                <Box>

                </Box>
                <Box>
                  <Button>Post</Button>
                </Box>
              </VStack>
            </Box>
          </HStack>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  )
}

export default AddPostModal