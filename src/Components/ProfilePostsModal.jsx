import { DeleteIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure,
  HStack,
  VStack,
  Button,
  InputGroup,
  InputLeftAddon,
  Input,
  Textarea,
  Text,
  Image,
  Select,
  Center,
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";

const ProfilePostsModal = (post) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Nature");
  const id = post.props.id;

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
    } else {
      alert("Please upload a valid image");
    }
    reader.onloadend = () => {
      setImage(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
  };

  const editPost = async () => {
    await fetch(
      `https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/posts/${id}`,
      {
        method: "PUT",
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
  };

  const deletePost = async () => {
    await fetch(
      `https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/posts/${post.props.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorize: sessionStorage.getItem("token"),
        },
      }
    );
    window.location.reload();
  };

  useEffect(() => {
    console.log(post);
    setImage(post.props.image);
    setTitle(post.props.title);
    setDescription(post.props.postsDescription);
    setType(post.props.type);
  }, []);

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalBody>
          <HStack spacing="10">
            <Box borderWidth="1px" borderRadius="lg">
              <Image src={image} w="500px" h="500px" />
            </Box>
            <Box>
            <Box textAlign="right" mb = "100" >
                  <IconButton icon={<DeleteIcon />} onClick={deletePost} />
                </Box>
              <VStack>
                <Box>
                  <Text mb="8px" fontFamily="Raleway">
                    Image:
                  </Text>
                  <input type="file" onChange={handleImageFile} />
                </Box>
                <Box w="300px">
                  <Text mb="8px" fontFamily="Raleway">
                    Title:
                  </Text>
                  <Input
                    type="Text"
                    onChange={handleTitle}
                    value={title}
                    fontFamily="Raleway"
                  />
                </Box>
                <Box w="300px">
                  <Text mb="8px" fontFamily="Raleway">
                    Description:
                  </Text>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fontFamily="Raleway"
                  />
                </Box>
                <Box>
                  <Text mb="8px" fontFamily="Raleway">
                    Type:
                  </Text>
                  
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
                  <Button
                    onClick={editPost}
                    fontFamily="Raleway"
                    bgColor={"#00C65A"}
                  >
                    Update
                  </Button>
                </Box>
              </VStack>
            </Box>
          </HStack>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProfilePostsModal;
