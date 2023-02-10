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
  VStack,
  Avatar,
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
  const handleImageFile = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    const accept = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
    if (accept.indexOf(file) > -1) {
      this.setState({
        image: file,
        imagePreviewUrl: reader.result,
      });
      image.crossOrigin = "Anonymous";
    } 
    reader.onloadend = () => {
      setProfilePicture(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
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
          my="40"
        >
          <Center>
            <Avatar src={profilePicture} h="250px" w="250px" my="10" />
          </Center>
          <Center>
            <input
              type="file"
              fontFamily="Raleway"
              placeholder="Profile Picture"
              onChange={handleImageFile}
            />
          </Center>
          <Center>
            <Box mt="10px">
              <Link to="/profileposts">
                <Button fontFamily="Raleway" w = "400px" bgColor={"#00C65A"}>Posts</Button>
              </Link>
            </Box>
          </Center>
          <Box mt="10px">
            <FormControl isDisabled="true">
              <FormLabel fontFamily="Raleway">Username</FormLabel>
              <Input
                type="text"
                fontFamily="Raleway"
                placeholder="Username"
                value={username}
                onChange={handleUsername}
              />
            </FormControl>
          </Box>
          <Box mt="10px">
            <FormControl isDisabled="true">
              <FormLabel fontFamily="Raleway">Email</FormLabel>
              <Input
                type="text"
                fontFamily="Raleway"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
            </FormControl>
          </Box>
          <Box mt="10px">
            <FormControl isDisabled="true">
              <FormLabel fontFamily="Raleway">Password</FormLabel>
              <Input
                type="password"
                fontFamily="Raleway"
                placeholder="password"
                value={password}
                onChange={handlePassword}
              />
            </FormControl>
          </Box>
          <Center>
            <Box my="5">
              <Button onClick={updateProfile} fontFamily="Raleway" bgColor={"#00C65A"}>
                Update
              </Button>
            </Box>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Profile;
