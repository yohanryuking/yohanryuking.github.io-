import "./App.css";
import Home from "./modules/Home";
import Catalogo from "./modules/Catalogo";
import Prueba from "./modules/Prueba";
import Admin from "./modules/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/prueba" element={<Prueba />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
