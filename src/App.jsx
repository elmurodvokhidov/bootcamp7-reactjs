import { useReducer } from "react";

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case "dec": return state = state - 1
      case "inc": return state = state + 1
      default: return state;
    }
  };


  return (
    <div className="flex justify-center items-center h-[100vh] bg-slate-300">
      <div className="flex justify-between items-center gap-16 text-5xl text-white">
        <button onClick={() => dispatch({ type: "dec" })} className="bg-red-400 py-3 px-10 rounded-2xl">minus</button>
        <span className="text-[100px]">{count}</span>
        <button onClick={() => dispatch({ type: "inc" })} className="bg-green-400 py-3 px-10 rounded-2xl">plus</button>
      </div>
    </div>
  );
}

export default App;
