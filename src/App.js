import { useState } from "react";
import Table from "./assets/Table";

function App() {
  const [users, setUsers] = useState([
    {
      name: 'tim',
      age: 20,
      password: '12345',
    },
    {
      name: 'john',
      age: 18,
      password: '45678',
    },
    {
      name: 'bob',
      age: 25,
      password: '12457',
    },
  ]);

  return (
    <div className="App">
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((val, ind) => (
              <Table key={ind} val={val} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
