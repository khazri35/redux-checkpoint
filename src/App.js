import React from 'react';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTasks from './Components/ListTasks/ListTasks';

function App() {
  return (
    <div className="App">
      <h2>Welcome</h2>
      <AddTask/>
      <ListTasks />
    </div>
  );
}

export default App;
