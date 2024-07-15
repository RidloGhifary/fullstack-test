import { Route,  Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Insert from "./pages/Insert"

function App() {
  return (
    <div className="container mx-auto max-w-7xl p-4">
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insert" element={<Insert />} />
      </Routes>
    </div>
  )
}

export default App
