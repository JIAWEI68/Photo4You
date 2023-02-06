import React, { useState } from 'react'
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
  const [image , setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");



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
                <InputGroup>
                   <InputLeftAddon children = {"Description"}/>
                   <Input type = "Text"/>
                 </InputGroup>
                </Box>
                <Box>
                  
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