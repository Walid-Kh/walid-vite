import NavBar from "./components/NavBar";
import Home from "./components/home/Home";
import Project from "./components/project/Project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
function App() {
  /* useEffect (() =>
  {
    let data; 
    const fetchdata =async () => {
      data = await (await fetch("src/data/db.json")).json();
      console.log(data);
    }
    fetchdata(); 
  },[]); */
  return (
      <div className="flex flex-col mx-auto h-screen ">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home category="Latest Projects :" />} />
        </Routes>
        <Routes>
          <Route path="projects">
            <Route path=":id" element={<Project />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
