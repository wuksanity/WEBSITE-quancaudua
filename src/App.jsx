import { useState } from 'react';
import './App.css'
import EntryView from './views/EntryView';
import MainView from './views/MainView';

function App() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return <EntryView onEnter={() => setEntered(true)} />;
  }

  return <MainView />;
}

export default App
