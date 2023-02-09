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
  const [saveCount, setSaveCount] = useState(0);
  const saveCheck = () => {
    if (saves.filter((save) => save.postId === post.props.id).length > 0) {
      setCheckSave(true);
      setSaveText("Unsave");
    } else {
      setCheckSave(false);
    }
  };
  useEffect(() => {
    saveCheck();
  }, [saves]);
  const fetchData = async () => {
    const response = await fetch(
      `https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/saves/user/${userId}`
    );
    const data = await response.json();
    setSaves(data);
    console.log(saves);
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
      if(saveCount > 0){
        toast({
          title: "Post has been saved.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });

      }
      else if (saves.filter((save) => save.postId === post.props.id).length > 0) {
        toast({
          title: "Post already saved.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
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
          setSaveCount(saveCount + 1);
          setCheckSave(true);
          setSaveText("Unsave");
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
  const deleteSaves = () => {
    if (userId == null) {
      toast({
        title: "You must be logged in to save a post.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      if (saves.filter((save) => save.postId === post.props.id).length > 0) {
        try {
          fetch(
            `https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/saves/${
              saves.filter((save) => save.postId === post.props.id)[0].id
            }`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                authorize: sessionStorage.getItem("token"),
                "Allow-Control-Allow-Origin": "*",
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
        toast({
          title: "Post unsaved.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setSaveText("Save");
      } else {
        toast({
          title: "Post has been saved.",
          status: "error",
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
                  {checkSave ? (
                    <Button onClick={deleteSaves}>{saveText}</Button>
                  ) : (
                    <Button onClick={addToSaves}>{saveText}</Button>
                  )}
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
