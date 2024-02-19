import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import { store } from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    </Provider>
  )
}

export default App