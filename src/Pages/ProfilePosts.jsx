import React from "react";
import { useState, useEffect } from "react";
import { useDisclosure, Box, IconButton, SimpleGrid, Modal } from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import ProfilePostsModal from "../Components/ProfilePostsModal";

const ProfilePosts = () => {
  const [userId, setUserId] = useState("");
  const [postsList, setPosts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPost, setCurrentPost] = useState();
  const id = sessionStorage.getItem("userId");
  function openModal(post) {
    onOpen();
    setCurrentPost(post);
  }
  const fetchData = async () => {
    try {
      const result = await fetch(
        `https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/posts/user/${id}`
      );
      const data = await result.json();
      setPosts(data);
      console.log(postsList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <Box textAlign={"right"}>
        <IconButton icon = {<AddIcon/>} />
      </Box>
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="10">
        {postsList.length > 0 && postsList.map((post) => (
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" key={post.id}>
            <Image src={post.image} />
            <Box p="6">
              <Box display="flex" alignItems="stretch" overflow="hidden">
                <Box mt="1" font="Raleway">
                  {post.title}
                </Box>
              </Box>
            </Box>
            <Box p="6">
              <Button onClick={openModal(post)}>Details</Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ProfilePostsModal props={currentPost} />
      </Modal>
    </div>
  );
};

export default ProfilePosts;
