import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { productFailure, productGet, productStart } from "./redux/slice/ProductSlice";

function App() {
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  async function getProducts() {
    dispatch(productStart());
    try {
      const res = await axios.get("http://localhost:5000/products");
      dispatch(productGet(res.data));
    } catch (error) {
      dispatch(productFailure(error));
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        name="search"
        id="search" />

      <div>{products.filter(product => {
        if (product.name.toLowerCase().includes(search)) {
          return product
        }
      }).map((product, index) => (
        <div key={index}>
          <h1>{product.name}</h1>
          <h1>{product.price}</h1>
        </div>
      ))}</div>
    </div>
  )
}

export default App