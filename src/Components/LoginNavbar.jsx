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
              <MenuGroup title="Profile">
                <Link to="/profile">
                <MenuItem>
                 Account
                </MenuItem>
                </Link>
                <MenuItem onClick={signOut}>Sign Out</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
}

export default loginNavbar;
