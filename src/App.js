import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import Creation from "./pages/Creation";
import Header from "./components/Header";
import MainContainer from "./components/Container";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<User />} />
          <Route path="/creation" element={<Creation />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
