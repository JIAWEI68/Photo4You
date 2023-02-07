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

export default ProfilePostsModal;
