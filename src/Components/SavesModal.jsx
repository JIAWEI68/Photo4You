import React, { useEffect } from "react";
import {
  Modal,
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
  Button,
  useToast,
  Image,
} from "@chakra-ui/react";


const SavesModal = (save) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const removeSave = async () => {
    await fetch(`https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/saves/${save.props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorize: sessionStorage.getItem("token"),
      },
    });
    window.location.reload();
  };

  useEffect(() => {
    console.log(save.props);
  }, [save]);
  return (
<ModalOverlay>
      <ModalContent>
        <ModalBody>
          <HStack spacing="10">
            <Box>
              <Image src={save.props.image} w="400px" />
            </Box>
            <Box>
              <VStack w="50px">
                <Box w="50px">
                  <h1
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "bold",
                    }}
                  >
                    {save.props.title}
                  </h1>
                </Box>
                <Box ml="50px">
                  <p
                    style={{
                      fontFamily: "Raleway",
                    }}
                  >
                    Taken By: {save.props.username}
                  </p>
                </Box>
                <Box>
                  <p
                    style={{
                      fontFamily: "Raleway",
                    }}
                  >
                    {save.props.postsDescription}
                  </p>
                </Box>
                <Box>
                  <Button onClick = {removeSave}>Unsave</Button>
                </Box>
              </VStack>
            </Box>
          </HStack>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SavesModal;
