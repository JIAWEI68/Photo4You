import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";

const CreatePost = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [image, setImage] = React.useState("");
  const [type, setType] = React.useState("");

  function createPosts() {
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        author: author,
        image: image,
        type: type,
      }),
    });
  }
  
  return (
    <div>
      <InputGroup>
        <InputLeftAddon children="Title" />
        <Input />
      </InputGroup>
    </div>
  );
};

export default CreatePost;
