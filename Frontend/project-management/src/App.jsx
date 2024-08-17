import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./pages/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import IssueDetails from "./pages/IssueDetails/IssueDetails";
import Auth from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./Redux/Auth/Action";
import { store } from "./Redux/Store"
import { fetchProjects } from "./Redux/Project/Action";

function App() {
  const dispatch = useDispatch();
  const  {auth} = useSelector(store=>store)
  console.log(auth)

  useEffect(()=>{
    dispatch(getUser())
    dispatch(fetchProjects({}))
  }, [auth.jwt]);
  return (
    <>
      {auth.user?  (
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route
              path="/project/:projectId/issue/:issueId"
              element={<IssueDetails />}
            />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
