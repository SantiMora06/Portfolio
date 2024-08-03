import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"


function App() {
  return <> <Routes>
    <Route path="/" element={HomePage}></Route>
    <Route path="/projects" element={HomePage}></Route>
    <Route path="/about" element={AboutPage}></Route>
    <Route path="/contact" element={ContactPage}></Route>

  </Routes>

    Ready to code with Mantine, a router would be nice in there 😺</>
}

export default App
