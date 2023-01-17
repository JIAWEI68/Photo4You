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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

const Links = ["Login", "Signup"];

const Navbar = () => {
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
              }}
              size="lg"
            />
          </InputGroup>
        </Box>
        <Spacer />
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