import React from 'react'
import './App.scss'
import ConstructorBar from './components/ConstructorBar'
import ConstructorDisplay from './components/ConstructorDisplay'

function App() {
  return (
    <div className="container">
      <div className="constructor__container">
          <ConstructorBar />
          <ConstructorDisplay />
      </div>
    </div>
  );
}

export default App;
