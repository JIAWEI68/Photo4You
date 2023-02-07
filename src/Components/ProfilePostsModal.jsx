import {   Modal,
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
import React from "react";

const ProfilePostsModal = ({ post }, data) => {
  const [image, setImage] = useState("a");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Nature");
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalBody>
          <HStack spacing="10">
            <Box borderWidth="1px" borderRadius="lg">
              <Image src={post.props.image} w="200px" h="500px"/>
            </Box>
            <Box>
              <VStack>
                <Box>
                  <InputGroup fontFamily="Raleway">
                    <InputLeftAddon children={"Image Link"} />
                    <Input type="Text" value={post.props.image} onChange={(e) => setImage(e.target.value)} />
                  </InputGroup>
                </Box>
                <Box w="300px">
                  <InputGroup>
                    <InputLeftAddon children={"Title"} />
                    <Input type="Text" onChange={handleTitle} />
                  </InputGroup>
                </Box>
                <Box w="300px">
                  <Text mb="8px" fontFamily="Raleway">
                    Description:
                  </Text>
                  <Textarea value={description} onChange={handleDescription} />
                </Box>
                <Box>
                  <Select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    w="300px"
                  >
                    <option value="nature">Nature</option>
                    <option value="wallpaper">Wallpaper</option>
                    <option value="locations">Locations</option>
                    <option value="potraits">Potraits</option>
                    <option value="animals">Animals</option>
                  </Select>
                </Box>
                <Box></Box>
                <Box>
                  <Button onClick={addPost}>Post</Button>
                </Box>
              </VStack>
            </Box>
          </HStack>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProfilePostsModal;
