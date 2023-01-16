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

const Links = ["Login", "Signup"];

const Navbar = () => {
  return (
    <Box bg="#00C65A" w="2131px" mt="-10" ml="-8">
      <Flex minWidth="max-content" alignItems="center" gap="2" color="grey">
        <Box p="2">
          <Heading size="md" ml="24">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontFamily: "Raleway",
                color: "black",
              }}
            >
              Photo4You
            </Link>
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="grey.300" />}
            />
            <Input
              placeholder="Search"
              fontSize="20"
              style={{
                textDecoration: "none",
                textAlign: "center",
                borderRadius: "1.625rem",
                width: "344px",
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
                color: "black",
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
                color: "black",
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
