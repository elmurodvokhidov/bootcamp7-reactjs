import { Route, Routes } from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";
import { useReducer } from "react";

function App() {
  const initialState = [
    {
      ism: "Salim",
      familya: "Toirov",
      rang: true
    },
    {
      ism: "Bobur",
      familya: "Alimov",
      rang: false
    },
    {
      ism: "Gulmira",
      familya: "Ashirmatova",
      rang: true
    },
  ];

  const [foydalanuvchilar, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "CREATE": return state = [...state, action.payload]
      case "DELETE": return state = state.filter(item => item.ism !== action.payload)
      default: return state
    };
  };

  return (
    <div className="px-10">
      {/* Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home foydalanuvchilar={foydalanuvchilar} dispatch={dispatch} />} />
        <Route path="create-new" element={<Form dispatch={dispatch} />} />
      </Routes>
    </div>
  );
}

export default App;