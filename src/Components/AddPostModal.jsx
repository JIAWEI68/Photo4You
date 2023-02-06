import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    InputGroup,
    InputLeftAddon,
    Input,
  } from '@chakra-ui/react'

const AddPostModal = () => {

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
                 <InputGroup fontFamily="Raleway">
                   <InputLeftAddon children = {"Image Link"}/>
                   <Input type = "Text"/>
                 </InputGroup>
                </Box>
                <Box>
                 <InputGroup>
                   <InputLeftAddon children = {"Title"}/>
                   <Input type = "Text"/>
                 </InputGroup>
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
                  <Button onClick={addToSaves}>Save</Button>
                </Box>
              </VStack>
            </Box>
          </HStack>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  )
}

export default AddPostModal