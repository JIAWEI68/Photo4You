import React from 'react'
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

const ProfilePosts = () => {
  const [userId, setUserId] = useState("")
  const [postsList, setPosts] = useState([])
  const {isOpen, onOpen, onClose} = useDisclosure();
  const id = sessionStorage.getItem("userId")
  function openModal(post){
    onOpen;
    setCurrentPost(post);
  };
  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
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
        {postsList.map((post) => (
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" key = {post.id}>
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
        <PostsModal props={currentPost} />
      </Modal>
    </div>
  )
}

export default ProfilePosts