import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('/api').then(res => setPeople(res.data));
  }, []);

  return (people.map((p,index) => { 
    return (
    <p key={index}>
      {p.id} {p.name} {p.age}
    </p>)
  }))
}

export default App;
