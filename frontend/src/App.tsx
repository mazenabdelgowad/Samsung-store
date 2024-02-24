import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/SignUp/SignUp";
import Signin from "./pages/Signin/Signin";
function App() {
  const location = useLocation();

  // True if the pathname sign-in or sign-up
  const showNavbarAndFooter =
    location.pathname.includes("sign-in") ||
    location.pathname.includes("sign-up");


  return (
    <main>
      {!showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
      {!showNavbarAndFooter && <Footer />}
    </main>
  );
}

export default App;
