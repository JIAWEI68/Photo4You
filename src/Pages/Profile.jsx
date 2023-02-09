import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Icon,
  Input,
  Center,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState, state } from "react";
import { MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { userStores } from "../States/userState";
import { AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const id = sessionStorage.getItem("userId");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleProfilePicture = (e) => {
    setProfilePicture(e.target.value);
  };
  const updateProfile = async () => {
    await fetch(
      `https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/user/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          authorize: "auth",
        },
        body: JSON.stringify({
          profilePicture: profilePicture,
          email: email,
          password: password,
          username: username,
        }),
      }
    );
    sessionStorage.setItem("profilePicture", profilePicture);
    window.location.reload();
  };
  const getProfile = async () => {
    const response = await fetch(
      `https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/user/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorize: "auth",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setProfile(data);
    userStores.setState({ user: data });
    for (const user of data) {
      setUsername(user.username);
      setEmail(user.email);
      setPassword(user.password);
      setProfilePicture(user.profilePicture);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <Center>
        <Box
          borderWidth="1px"
          w="1279px"
          h="782px"
          borderColor="#00C65A"
          alignItems="stretch"
          my = "40"
        >
          <Center>
            <Image src={profilePicture} h= "250px" />
          </Center>
          <Center>
            <Box mt="10px">
              <Link to="/profileposts">
                <Button>Posts</Button>
              </Link>
            </Box>
          </Center>
          <Box mt="20px">
            <FormControl>
              <FormLabel>Profile Picture</FormLabel>
              <Input
                type="text"
                placeholder="Profile Picture"
                value={profilePicture}
                onChange={handleProfilePicture}
              />
            </FormControl>
          </Box>
          <Box mt="10px">
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsername}
              />
            </FormControl>
          </Box>
          <Box mt="10px">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
            </FormControl>
          </Box>
          <Box mt="10px">
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePassword}
              />
            </FormControl>
          </Box>
          <Center>
            <Box mt="10px">
              <Button onClick={updateProfile}>Update</Button>
            </Box>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Profile;
