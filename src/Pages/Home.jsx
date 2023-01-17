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
  Link,
  Center,
} from "@chakra-ui/react";
import React, { useState, useEffect, handleChange } from "react";

function Home() {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    //useEffect is a hook that runs after every render
    fetchData();
  }, []);
  const onClick = () => {
    setSelected("");
  };
  const fetchData = async () => {
    return fetch("http://localhost:3000/posts").then((response) =>
      setPosts(response.json())
    );
  };

  return (
    <div className="container">
      <Center>
        <Box borderWidth="2px" width="100px" height = "30px" mt = "5" borderRadius="10" backgroundColor="#00C65A">
          <Center>
            <Link to="/saves" style = {{textDecoration : "none", fontFamily : "Raleway"}}>Saved</Link>
          </Center>
        </Box>
      </Center>
      <SimpleGrid minChildWidth="120px" spacing="40px" mt = "10">
        <Box maxW="sm" borderWidth="1px" borderRadius="lg">
          <Image src={posts.image} />
          <Box p="6">
            <Box display="flex" alignItems="stretch" overflow="hidden">
              <Box mt="1" font="Raleway">
                {posts.title}
              </Box>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default Home;
