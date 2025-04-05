import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login";
import Register from "./components/Register";
import Seller from "./components/Seller";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seller" element={<Seller />} />
      </Routes>
    </Router>
  )
}

export default App
