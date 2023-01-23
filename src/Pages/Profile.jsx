import { Box, FormControl, FormLabel, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
const Profile = () => {
  const [profile, setProfile] = useState([]);
  const id = sessionStorage.getItem("userId");
  const handleUsername = (e) => {
    setProfile({ ...profile, username: e.target.value });
  };
  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);
  return (
    <div>
      <Box borderWidth="1px" w="1279px" h="782px" borderColor="#00C65A">
        <Box h="320" w="373" borderWidth="1px" mr="0" ml="90px" mt="0">
          <Image src={profile.profilePicture} h="195.7" w="195.7" />
        </Box>
      <Box mt = '10px'>
      <FormControl>
          <FormLabel>
            <Icon as={MdPersonOutline} boxSize={6} /> Username
          </FormLabel>
          <Input
            type="text"
            placeholder="Username"
            value={profile.username}
            onChange={handleUsername}
          />
        </FormControl>
      </Box>
      </Box>
    </div>
  );
};

export default Profile;
