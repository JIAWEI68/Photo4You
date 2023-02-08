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
import { useEffect } from "react";

const Saves = () => {
  const [savesList, setSaves] = React.useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentSaves, setCurrentSaves] = React.useState();
  const id = sessionStorage.getItem("userId");
  async function fetchData() {
    const response = await fetch(`https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/saves/user/${id}`);
    const data = await response.json();
    setSaves(data);
  }
 
  const openModal = (save) => {
    onOpen();
    setCurrentSaves(save);
  };
 useEffect(() => {
    fetchData();
  }, []);
  
if(id === null){
  return (
    <div>
      <h1>You must be logged in to view your saves.</h1>
    </div>
  );
}
  else{
    return (
      <div>
        {" "}
        <SimpleGrid spacing="40px" my="10" columns={[4]} mx = "24">
          {savesList.length > 0 && savesList.map((save) => (
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
  }
};

export default Saves;
