import {
    Box,
    Center,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Spacer,
    Image
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function loginNavbar (){
   
    const [profilePicture , setProfilePicture] = useState(""); 
    const user = sessionStorage.getItem("user");

    useEffect(() => {
        if(user == null){
            setProfilePicture("https://p.kindpng.com/picc/s/623-6236350_profile-icon-png-white-clipart-png-download-windows.png")
        }
        else if(user != null){
            setProfilePicture(JSON.parse(user).profilePicture)
        }
    }, []);

    
    return (
      <Box
        className="navBar"
        bg="#373737"
        borderWidth="1"
        width="100%"
        height="53px"
      >
        <Flex minWidth="max-content" alignItems="center" gap="2" color="grey">
          <Box p="2">
            <Heading size="md" ml="24">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontFamily: "Raleway",
                  color: "white",
                }}
              >
                Photo4You
              </Link>
            </Heading>
          </Box>
          <Spacer />
          <Center>
            <Box p="1.5">
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
                />
              </InputGroup>
            </Box>
          </Center>
          <Spacer />
          <Box h="30px" mt = "0" mr = "10" mb = "0">
            <Image src = {profilePicture} h = "40px"/>
          </Box>
        </Flex>
      </Box>
    );
  };

  export default loginNavbar;