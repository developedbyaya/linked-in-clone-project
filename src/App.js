import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app-container">
        <Sidebar />
        <Feed />
      {/* Feed */}
      {/* Widgets */}
      </div>

    </div>
  );
}

export default App;
