import React from "react";
import Main from "./pages/main"
import About from "./pages/about"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes>
  );
}

export default App;
