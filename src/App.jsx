import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/saves" element={<Saves />} />
        <Route path="/saves/:id" element={<Saves />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

const [posts, setPosts] = useState([]); //create variables

useEffect(() => {
  //useEffect is a hook that runs after every render
  fetch("http://localhost:5000/posts", {
    //fetch data from the server
    method: "GET",
    headers: {
      "Content-Type": "application/json",

      
}, []);
