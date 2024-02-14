import { useDispatch, useSelector } from "react-redux";
import { inc, dec } from "./redux/slice/counterSlice";

function App() {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center h-[100vh] bg-slate-300">
      <div className="flex justify-between items-center gap-16 text-5xl text-white">
        <button onClick={() => dispatch(dec(1))} className="bg-red-400 py-3 px-10 rounded-2xl">minus</button>
        <span className="text-[100px]">{count}</span>
        <button onClick={() => dispatch(inc(1))} className="bg-green-400 py-3 px-10 rounded-2xl">plus</button>
      </div>
    </div>
  );
}

export default App;
