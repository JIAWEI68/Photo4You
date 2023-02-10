import {
  Box,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  Avatar,
  Text
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserPool from "../UserPool";
import { userStores } from "../States/userState";

function loginNavbar() {
  const user = sessionStorage.getItem("userId");
  const [userState, setUserState] = userStores((state) => [state.user]);
  const profilePicture = sessionStorage.getItem("profilePicture");
  const signOut = () => {
    const user = UserPool.getCurrentUser();
    user.signOut();
    sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <Box
      className="navBar"
      bg="#373737"
      borderWidth="1"
      width="100%"
      height="53px"
      position={"fixed"}
      top={0}
      zIndex={1}
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
          <Box p="1.5"></Box>
        </Center>
        <Spacer />
        <Link to="/contact"> 
            <Text fontFamily="Raleway" fontStyle={"bold"}  color = "white" mx = "10">Contact</Text>
          </Link>
        <Box h="30px" mt="1" mr="10" mb="3">
          <Menu>
            <MenuButton
              as={Button}
              nrounded={"full"}
              variant={"link"}
              cursor={"pointer"}
            >
              <Avatar src={profilePicture} />
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile" fontFamily="Raleway">
                <Link to="/profile">
                  <MenuItem fontFamily="Raleway">Account</MenuItem>
                </Link>
                <MenuItem onClick={signOut} fontFamily="Raleway">
                  Sign Out
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
}

export default loginNavbar;
