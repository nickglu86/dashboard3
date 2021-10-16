import { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';

function App() {
  const [activeTab,setActiveTab] = useState('Overview');

  return (
    <div className="App">
        <Header label={activeTab} />
        <Dashboard updateHeader={label => setActiveTab(label) } />
    </div>
  );
}

export default App;
