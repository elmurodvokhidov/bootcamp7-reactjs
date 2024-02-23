import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import AuthServise from "./redux/api/auth";
import { useDispatch } from "react-redux";
import { authSuccess } from "./redux/slice/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAuth = async () => {
      const { data } = await AuthServise.getAuth(localStorage.getItem("x-id"));
      dispatch(authSuccess({ ...data, token: localStorage.getItem("x-token") }));
    };

    if (localStorage.getItem("x-token")) {
      getAuth();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App