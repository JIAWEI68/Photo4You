import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import RenderPage from "./Pages/RenderPage";
//import About from Pages
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Saves from "./Pages/Saves";
import Posts from "./Pages/Post";
import NotFound from "./Pages/NotFound";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import ProfilePosts from "./Pages/ProfilePosts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/saves" element={<Saves />} />
        <Route path="/saves/:id" element={<Saves />} />
        <Route path="/profileposts" element={<ProfilePosts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    {" "}
    <RouterProvider router={router} />
  </ChakraProvider>
);
