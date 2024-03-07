import "./App.css";
import Home from "./modules/Home";
import Catalogo from "./modules/Catalogo";
import Prueba from "./modules/Prueba";
import Admin from "./modules/Admin";
import Login from "./modules/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/prueba" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
