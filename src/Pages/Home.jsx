import { Box, Card, SimpleGrid, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //useEffect is a hook that runs after every render
    fetchData();
  }, []);

  const fetchData = async () => {
    return fetch("http://localhost:3000/posts").then((response) =>
      setPosts(response.json())
    );
  };
  return (
    <div className="container">
      <SimpleGrid minChildWidth="120px" spacing="40px">
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
