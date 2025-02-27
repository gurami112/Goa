import { useState } from 'react';
import Button from './components/Button';
import StyleButton from './components/StyleButton';
import CssButton from './components/CssButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Button Styling Examples</h1>
      <Button />
      <StyleButton />
      <CssButton />
    </div>
  );
}

export default App;
