import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProjectBox from './components/ProjectBox';

function App() {
  const [focusProjectId, setFocusProjectId] = useState(null);

  return (
    <div className="app">
      <Navbar setFocusProjectId={setFocusProjectId} />
      <ProjectBox setFocusProjectId={setFocusProjectId} focusProjectId={focusProjectId} />
    </div>
  )
}

export default App
