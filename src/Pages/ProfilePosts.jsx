import React from "react";
import { useState, useEffect } from "react";
import {
  useDisclosure,
  Box,
  IconButton,
  SimpleGrid,
  Modal,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ProfilePostsModal from "../Components/ProfilePostsModal";
import AddPostModal from "../Components/AddPostModal";

const ProfilePosts = () => {
  const [userId, setUserId] = useState("");
  const [postsList, setPosts] = useState([]);
  const [searchPost, setSearchedPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const {
    isOpen: isOpenAddPost,
    onOpen: onOpenAddPost,
    onClose: onCloseAddPost,
  } = useDisclosure();
  const {
    isOpen: isOpenPosts,
    onOpen: onOpenPosts,
    onClose: onClosePosts,
  } = useDisclosure();
  const [currentPost, setCurrentPost] = useState();
  const id = sessionStorage.getItem("userId");
  function openModal(post) {
    onOpenPosts();
    setCurrentPost(post);
  }
  const fetchData = async () => {
    try {
      const result = await fetch(
        `https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/posts/user/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
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
      <Box textAlign={"right"} my = "53">
        <IconButton icon={<AddIcon />} onClick={onOpenAddPost} bgColor = "#00C65A" />
      </Box>
      <SimpleGrid spacing="10" my="10" mx="24" columns={[1, 4]}>
        {postsList.length > 0 &&
          postsList.map((post) => (
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" key={post.id}>
              <Center><Image src={post.image} h = "300px"/></Center>
              <Box p="6">
                <Box display="flex" alignItems="stretch" overflow="hidden">
                  <Box mt="1" fontFamily="Raleway">
                    {post.title}
                  </Box>
                </Box>
              </Box>
              <Box p="6">
                <Button onClick={() => openModal(post)} fontFamily = "Raleway" bgColor={"#00C65A"}>Details</Button>
              </Box>
            </Box>
          ))}
      </SimpleGrid>

      <Modal onClose={onClosePosts} isOpen={isOpenPosts} isCentered size="xl">
        <ProfilePostsModal props={currentPost} />
      </Modal>
      <Modal onClose={onCloseAddPost} isOpen={isOpenAddPost} isCentered size="xl">
        <AddPostModal />
      </Modal>
    </div>
  );
};

export default ProfilePosts;
