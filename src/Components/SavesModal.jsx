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

const SavesModal = ({ save }, data) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    console.log(data.props);
  }, [save]);
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

export default SavesModal;
