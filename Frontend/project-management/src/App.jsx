import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./pages/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
