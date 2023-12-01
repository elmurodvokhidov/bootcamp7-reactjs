import { Card } from './components/Card'
import './index.css'

function App() {
  function addNum() {
    console.log(2 + 2)
  }

  return (
    <div className="App pt-5">
      <div className="d-flex justify-content-center gap-5">
        <Card addNum={addNum} name={"John Doe"} />
        <Card name={"Michael Jackson"} orqaFon={"yellow"} />
        <Card name={"Barak Obama"} orqaFon={"blue"} />
      </div>
      <h1 className='heading'>Heading 1</h1>
    </div>
  );
}

export default App;