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
  Button
} from "@chakra-ui/react";

const PostsModal = (post) => {
  const [posted, setPosts] = useState([]);
  const [checkSave, setCheckSave] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    console.log(post);
    setPosts(post);
    console.log(posted);
  }, []);
  const addToSaves = () => {
    fetch("http://localhost:3000/saves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth" : sessionStorage.getItem("auth"),
      },
      body: JSON.stringify({
        title: post.props.title,
        image: post.props.image,
        username: post.props.username,
        postsDescription: post.props.postsDescription,
        userId : sessionStorage.getItem("userId"),
        postId : post.props.id,
      }),
    });
    setCheckSave(true);
  };
  const deleteSaves = (id) => {
    fetch(`http://localhost:3000/saves/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth": sessionStorage.getItem("auth"),
      },
    });
    setCheckSave(false);
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalBody>
          <HStack spacing="20">
            <Box>
              <img src={post.props.image} />
            </Box>
            <Box>
              <VStack>
                <Box>
                  <h1 style={{
                    fontFamily: "Raleway",
                    fontWeight: "bold",
                  }}>{post.props.title}</h1>
                </Box>
                <Box ml ="50px">
                  <p style={{
                    fontFamily: "Raleway",
                  }}>Taken By: {post.props.username}</p>
                </Box>
                <Box>
                  <p style={{
                    fontFamily: "Raleway",
                  }}>{post.props.postsDescription}</p>
                </Box>
                <Box>
                  {checkSave ? (<Button onClick={addToSaves}>Save</Button>) : (<Button onClick={deleteSaves}>Unsave</Button>)}
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
