import NavBar from "./components/NavBar";
import Home from "./components/home/Home";
import Project from "./components/project/Project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
