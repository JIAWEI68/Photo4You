import { Box, Card, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //useEffect is a hook that runs after every render
    fetch(
      "http://localhost:5000/posts",
      {
        //fetch data from the server
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      []
    );
  });
  return (
  <div class = "container">
    <SimpleGrid minChildWidth='120px' spacing = '40px'>
      <Box maxW = 'sm' borderWidth='1px' borderRadius='lg'>
        <Image src = {posts.image} alt = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png'/>
        <Box p = '6'>
        <Box display='flex' alignItems = 'stretch' overflow='hidden'>
          <Box mt = '1' font='Raleway'>
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
