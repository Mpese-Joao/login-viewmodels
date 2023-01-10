import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../componentes/Home";
import Login from "../ui/pages/Login";
//import Register from "../ui/pages/Register";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
    
    
      </Routes>
    </BrowserRouter>
  );
}
