import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Likes from "./pages/Likes";
import Basket from "./pages/Basket";
import CardInfo from "./pages/CardInfo";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { ContextData } from "./context/Context";

function App() {
  const { loginModal } = useContext(ContextData);

  const style = {
    height: "100vh",
    overflow: "hidden",
  };

  return (
    <div className="App" style={loginModal ? style : null}>

      <NavbarComponent />

      <Routes>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="likes" element={<Likes />} />
        <Route path="basket" element={<Basket />} />
        <Route path="profile" element={<Add />} />
        <Route path=":id" element={<CardInfo />} />
        <Route path="likes/:id" element={<CardInfo />} />
        <Route path="product/:id" element={<CardInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;