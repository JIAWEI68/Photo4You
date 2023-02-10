import {
  Box,
  SimpleGrid,
  Image,
  Button,
  Center,
  Modal,
  useDisclosure,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import React, { useState, useEffect, handleChange } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useStore } from "../States/searchValue";
import PostsModal from "../Components/PostsModal";
function Home() {
  const [postsList, setPosts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(null);
  const [currentPost, setCurrentPost] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [searchedPosts, setSearchedPosts] = useState([]);
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
  useEffect(() => {
    //useEffect is a hook that runs after every render
    fetchData();
  }, []);
  useEffect(() => {
    if(postsList.length > 0){
      setSearchedPosts(
        [...postsList].filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [postsList, searchValue]);
  function openModal(post) {
    onOpen();
    setCurrentPost(post);
  }

  return (
    <div className="container">
      <Center>
        <Box mt="20" mx = "10" mb = "-1">
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="grey.300" textAlign="center" />}
            />
            <Input
              placeholder="Search"
              fontSize="20"
              style={{
                textDecoration: "none",
                textAlign: "center",
                borderRadius: "0.5rem",
                width: "344px",
                background: "white",
                height: "38px",
                color: "black",
                fontFamily: "Raleway",
              }}
              size="lg"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </InputGroup>
        </Box>
      </Center>
      <Center>
        <Link to="/saves">
          <Box
            borderWidth="2px"
            width="130px"
            height="35px"
            my="5"
            borderRadius="10"
            backgroundColor="#00C65A"
          >
            <Center style={{ textDecoration: "none", fontFamily: "Raleway" }} my = "1">
              Saved
            </Center>
          </Box>
        </Link>
      </Center>
      <SimpleGrid
        spacing="10"
        my="10"
        mx = "24"
        columns={[1,4]}
      >
        {
          searchedPosts.length > 0 &&
            searchedPosts.map((post) => (
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" key={post.id} >
                <Center><Image src={post.image}  h = "300px"/></Center>
                <Box p="6">
                  <Box display="flex" alignItems="stretch" overflow="hidden">
                    <Box mt="1" fontFamily="Raleway">
                      {post.title}
                    </Box>
                  </Box>
                </Box>
                <Box p="6">
                  <Button onClick={() => openModal(post)} fontFamily = "Raleway" bgColor={"#00C65A"} textDecoration = "none">Details</Button>
                </Box>
              </Box>
            ))
        }
      </SimpleGrid>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
        <PostsModal props={currentPost} />
      </Modal>
    </div>
  );
}

export default Home;
