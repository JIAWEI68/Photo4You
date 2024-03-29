//import index.css
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
  Heading,
  Input,
  LinkOverlay,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  InputGroup,
  InputRightElement,
  color,
  Center,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useStore } from "./States/searchValue";

const Links = ["Login", "Signup"];

const Navbar = () => {
  const userId = sessionStorage.getItem("userId");
  const [nullChecker, setUserId] = useState(false);
  const [searchValues, setSearchValues] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === null) {
      setSearchValues("");
    } else {
      setSearchValues(e.target.value);
    }
    useStore.setState({ searchValue: searchValues });
  };
  useEffect(() => {
    if (userId != null) {
      setUserId(true);
    }
  }, []);
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
        <Box p="3">
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
          <Text fontFamily="Raleway" fontStyle={"bold"} color = "white" mx = "10">
            Contact
          </Text>
        </Link>
        <Breadcrumb mr="100">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/login"
              style={{
                textDecoration: "none",
                fontFamily: "Raleway",
                color: "white",
              }}
            >
              Login
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/signup"
              style={{
                textDecoration: "none",
                fontFamily: "Raleway",
                color: "white",
              }}
            >
              Signup
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </Box>
  );
};

export default Navbar;
