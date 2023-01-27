import {
  Box,
  Card,
  SimpleGrid,
  Image,
  Select,
  IconButton,
  Button,
  LinkOverlay,
  LinkBox,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect, handleChange } from "react";
import { Link } from "react-router-dom";
import PostsModal from "../Components/PostsModal";
function Home() {
  const [postsList, setPosts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(null);
  const [currentPost, setCurrentPost] = useState();
  const fetchData = async () => {
    try {
      const result = await fetch(
        "https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/posts"
      );
      const data = await result.json();

      setPosts(data);
      console.log(postsList);
    } catch (error) {
      console.log(error);
    }
  };
  let postsL = Array.from(postsList);
  useEffect(() => {
    //useEffect is a hook that runs after every render
    fetchData();
  }, []);
  const onClick = () => {
    setSelected("");
  };
  function openModal(post) {
    onOpen();
    setCurrentPost(post);
  }

  return (
    <div className="container">
      <Center>
        <Box
          borderWidth="2px"
          width="100px"
          height="30px"
          mt="5"
          borderRadius="10"
          backgroundColor="#00C65A"
        >
          <Center>
            <Link
              to="/saves"
              style={{ textDecoration: "none", fontFamily: "Raleway" }}
            >
              Saved
            </Link>
          </Center>
        </Box>
      </Center>
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="10">
        {postsList.length > 0 &&
          postsList.map((post) => (
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
                <Button onClick={(post) => openModal(postsList)}>
                  Details
                </Button>
              </Box>
            </Box>
          ))}
      </SimpleGrid>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <PostsModal props={currentPost} />
      </Modal>
    </div>
  );
}

export default Home;
