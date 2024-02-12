import { Route, Routes } from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";
import { useReducer } from "react";
import getUID from "uid-generator-package";
import Edit from "./pages/Edit";

function App() {
  const initialState = [
    {
      id: "ODc5NUFZUTU3MTMy8795AYQ57132",
      ism: "Salim",
      familya: "Toirov",
      rang: true
    },
    {
      id: "MTQzMGZPajM3MTQz1430fOj37143",
      ism: "Bobur",
      familya: "Alimov",
      rang: false
    },
    {
      id: "MzE0MmxOTDMwMjQ03142lNL30244",
      ism: "Gulmira",
      familya: "Ashirmatova",
      rang: true
    },
  ];

  const [foydalanuvchilar, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "CREATE": return state = [...state, { ...action.payload, id: getUID(), rang: !state[state.length - 1].rang }]
      case "DELETE": return state = state.filter(item => item.id !== action.payload)
      case "EDIT": return state = state.map(item => item.id === action.payload.id ? action.payload : item)
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
        <Route path="edit/:id" element={<Edit dispatch={dispatch} foydalanuvchilar={foydalanuvchilar} />} />
      </Routes>
    </div>
  );
}

export default App;