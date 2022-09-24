import './App.css';
import React, { Suspense } from 'react';
import Dashboard  from './components/views/Dashboard'

// This file could be used as a playground to test out your components and/or pages
// Please make sure to replace your id in the env.local file

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
