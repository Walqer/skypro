import "./styles/globals.scss";
import Header from "./components/Header/Header";
import Catalog from "./pages/Catalog/Catalog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Catalog}></Route>
        <Route path="/cart" Component={Cart}></Route>
      </Routes>
    </Router>
  );
}

export default App;
