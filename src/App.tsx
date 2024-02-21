import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </main>
  )

}

export default App
