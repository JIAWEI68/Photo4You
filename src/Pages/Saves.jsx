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
  Center,
  InputGroup,
  InputRightElement,
  Input,
  InputLeftAddon,
} from "@chakra-ui/react"; 
import SavesModal from "../Components/SavesModal";
import { useEffect } from "react";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";

const Saves = () => {
  const [savesList, setSaves] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentSaves, setCurrentSaves] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [searchedSavesList, setSearchedSavesList] = useState([]);
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
  useEffect(() => {
    if(savesList.length > 0){
      setSearchedSavesList(
        [...savesList].filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [savesList, searchValue]);
  
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
        <Center>
        <Box my="10px" mx = "10">
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="grey.300" textAlign="center" />}
            />
            <Input
              placeholder="Search"
              fontSize="20"
              style={{
                textDecoration: "none",
                textAlign: "center",
                borderRadius: "0.5rem",
                width: "344px",
                background: "white",
                height: "38px",
                color: "black",
                fontFamily: "Raleway",
              }}
              size="lg"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </InputGroup>
        </Box>
      </Center>
        <SimpleGrid spacing="40px" my="10" columns={[4]} mx = "24">
          {searchedSavesList.length > 0 && searchedSavesList.map((save) => (
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" key = {save.id}>
              <Center>
              <Image src={save.image}  h = "300px"/>
              </Center>
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
        <Modal onClose={onClose} isOpen={isOpen} isCentered size = "xl">
          <SavesModal props={currentSaves} />
        </Modal>
      </div>
    );
  }
};

export default Saves;
