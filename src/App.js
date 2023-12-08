import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import NotFound from "./pages/NotFound"
import Project1 from "./pages/Project1"
import Project2 from "./pages/Project2"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />}>
          <Route path="project1" element={<Project1 />} />
          <Route path="project2" element={<Project2 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;