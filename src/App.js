import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">🐳 FOOD CLOUD</div>
        <div className="icons">
          <SearchBar />
          <Cart />
          <UserProfile />
        </div>
      </header>
      <main>
        <Menu />
      </main>
    </div>
  );
}

export default App;

