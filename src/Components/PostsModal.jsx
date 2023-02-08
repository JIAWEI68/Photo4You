import React, { useEffect, useState } from "react";
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
  useToast,
  Image,
} from "@chakra-ui/react";
import { saveStore } from "../States/savesStore";

const PostsModal = (post) => {
  const [posted, setPosts] = useState([]);
  const [checkSave, setCheckSave] = useState(false);
  const [saves, setSaves] = useState([]);
  const toast = useToast();
  const [saveText, setSaveText] = useState("Save");
  const userId = sessionStorage.getItem("userId");
  const fetchData = async () => {
    const response = await fetch(
      `https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/saves/user/${userId}`
    );
    const data = await response.json();
    setSaves(data);
  };

  useEffect(() => {
    fetchData();
    console.log(post);
    setPosts(post);
    console.log(posted);
  }, []);
  const addToSaves = () => {
    if (userId == null) {
      toast({
        title: "You must be logged in to save a post.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      if (saves.includes(post.props.title) && saves.includes(userId)) {
        toast({
          title: "Post already saved.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setSaveText("Saved");
      } else {
        try {
          fetch(
            "https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/saves",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                authorize: sessionStorage.getItem("token"),
                "Allow-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({
                title: post.props.title,
                image: post.props.image,
                username: post.props.username,
                postsDescription: post.props.postsDescription,
                type: post.props.type,
                userId: sessionStorage.getItem("userId"),
                postId: post.props.id,
              }),
            }
          );
        } catch (err) {
          console.log(err);
        }
        toast({
          title: "Post saved.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalBody>
          <HStack spacing="10">
            <Box>
              <Image src={post.props.image} w="400px" />
            </Box>
            <Box>
              <VStack w="50px">
                <Box w="100px">
                  <h1
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "bold",
                    }}
                  >
                    {post.props.title}
                  </h1>
                </Box>
                <Box ml="50px" w="100px">
                  <p
                    style={{
                      fontFamily: "Raleway",
                    }}
                  >
                    Taken By: {post.props.username}
                  </p>
                </Box>
                <Box w="100px">
                  <p
                    style={{
                      fontFamily: "Raleway",
                    }}
                  >
                    {post.props.postsDescription}
                  </p>
                </Box>
                <Box>
                  <Button onClick={addToSaves}>{saveText}</Button>
                </Box>
              </VStack>
            </Box>
          </HStack>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PostsModal;
