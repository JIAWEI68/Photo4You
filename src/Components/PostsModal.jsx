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
  useDisclosure
} from "@chakra-ui/react";

const PostsModal = ({posts}, data) => {
const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    console.log(data.props);
  }, [posts]);
  return (
<Modal onClose={onClose} isOpen = {isOpen} isCentered>
        <ModalOverlay>
          <ModalContent>
            <ModalBody>
              <Box></Box>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
  );
};

export default PostsModal;
