import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ProjectsPage from "./Pages/ProjectsPage"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"


function App() {
  return <> <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />

  </Routes>
  </>
}

export default App
