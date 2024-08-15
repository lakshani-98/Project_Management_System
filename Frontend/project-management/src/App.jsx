import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./pages/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import IssueDetails from "./pages/IssueDetails/IssueDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/project/:projectId/issue/:issueId" element={<IssueDetails/>} />
      </Routes>
    </>
  );
}

export default App;
