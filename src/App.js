import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/Home";
import RootLayout from "./layouts/RootLayout";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Likes from "./pages/Likes";
import Basket from "./pages/Basket";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="likes" element={<Likes />} />
      <Route path="basket" element={<Basket />} />
      <Route path="profile" element={<Add />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ));

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;