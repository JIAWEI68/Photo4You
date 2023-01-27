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
} from "@chakra-ui/react";

const PostsModal = ({ post }, data) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    console.log(post);
  }, [post]);
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalBody>
          <Box></Box>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PostsModal;
