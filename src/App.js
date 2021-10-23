
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users/')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  const handleAddUser = e => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <h2>{users.length}</h2>

      <ul>
        {
          users.map(user => <li key={user.id}>{user.id}{user.name}  {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
