import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./Paginas/Inicial";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
