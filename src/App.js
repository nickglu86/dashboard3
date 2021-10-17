import { useState } from 'react';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';

import './Styles/App.css';

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
