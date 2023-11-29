import { useState } from 'react'
import './Main.css';

function App() {

  const [count, setCount] = useState(0)

  function inc() {
    setCount(prev => prev + 1)
  }

  function dec() {
    if (count > 0) {
      setCount(prev => prev - 1)
    }
  }

  let btnStyle = {
    border: '1px solid black',
    backgroundColor: 'red',
    fontSize: '30px',
    padding: '10px 20px',
    color: 'white'
  }

  return (
    <div className="App">
      <h1 style={{ color: 'red', fontSize: '50px' }}>{count}</h1>
      <button style={btnStyle} onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <img src="./img/p3563021_b_v8_bb.jpg" alt="" />
    </div>
  );
}

export default App;