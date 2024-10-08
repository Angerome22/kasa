import React from 'react';
import './styles/index.scss';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import PropertyListing from './pages/PropertyListing/PropertyListing';
import About from './pages/About/About';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Layout from './components/Layout/layout';


function App() {
  return (
    <div className="App">    
      
      <Routes>
        <Route element={<Layout />}>
          <Route  path="/" element={<Home />} />
          <Route  path="/PropertyListing/:id" element={<PropertyListing />} />
          <Route  path="/About" element={<About />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>  
      </Routes>
      
    </div>
  );
}

export default App;
