import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Products from "./views/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/productos" element={<Products/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
