import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './index.css';

function App() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="content-area">
        <Header userName="Arthur Morgan" />
        <ProductList />
      </div>
    </div>
  );
}

export default App;