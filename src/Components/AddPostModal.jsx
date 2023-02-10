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
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleImageFile = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    const accept = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
    if (accept.indexOf(file) > -1) {
      this.setState({
        image: file,
        imagePreviewUrl: reader.result,
      });
    }
    reader.onloadend = () => {
      setImage(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
  };

  const addPost = async () => {
    try {
      await fetch(
        "https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/posts",
        {
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
            type: type,
          }),
        }
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalBody>
          <HStack spacing="10">
            <Box borderWidth="1px" borderRadius="lg">
              <Image src={image} w="200px" h="500px" />
            </Box>
            <Box>
              <VStack>
                <Box>
                  <input type="file" onChange={handleImageFile} />
                </Box>
                <Box w="300px">
                  <InputGroup>
                    <InputLeftAddon children={"Title"} fontFamily="Raleway" />
                    <Input
                      type="Text"
                      onChange={handleTitle}
                      fontFamily="Raleway"
                    />
                  </InputGroup>
                </Box>
                <Box w="300px">
                  <Text mb="8px" fontFamily="Raleway">
                    Description:
                  </Text>
                  <Textarea
                    value={description}
                    onChange={handleDescription}
                    fontFamily="Raleway"
                  />
                </Box>
                <Box>
                  <Text fontFamily={"Raleway"}>Type:</Text>
                  <Select
                    value={type}
                    fontFamily="Raleway"
                    onChange={(e) => setType(e.target.value)}
                    w="300px"
                  >
                    <option value="nature" fontFamily="Raleway">
                      Nature
                    </option>
                    <option value="wallpaper" fontFamily="Raleway">
                      Wallpaper
                    </option>
                    <option value="locations" fontFamily="Raleway">
                      Locations
                    </option>
                    <option value="potraits" fontFamily="Raleway">
                      Potraits
                    </option>
                    <option value="animals" fontFamily="Raleway">
                      Animals
                    </option>
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
