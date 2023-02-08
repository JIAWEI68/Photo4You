import React from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"; 
import SavesModal from "../Components/SavesModal";

const Saves = () => {
  const [savesList, setSaves] = React.useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentSaves, setCurrentSaves] = React.useState();
  async function fetchData() {
    const response = await fetch("http://localhost:3000/saves");
    const data = await response.json();
    setSaves(data);
  }
 
  const openModal = (save) => {
    onOpen();
    setCurrentSaves(save);
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      {" "}
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="10">
        {savesList.map((save) => (
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" key = {save.id}>
            <Image src={save.image} />
            <Box p="6">
              <Box display="flex" alignItems="stretch" overflow="hidden">
                <Box mt="1" font="Raleway">
                  {save.title}
                </Box>
              </Box>
            </Box>
            <Box p="6">
              <Button onClick={() => openModal(save)}>Details</Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <SavesModal props={currentSaves} />
      </Modal>
    </div>
  );
};

export default Saves;
