
import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import PropertyListing from './pages/PropertyListing/PropertyListing';
import About from './pages/About/About';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Header from './components/Header/header';


function App() {
  return (
    <div className="App">
      
      <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/PropertyListing/:id" element={<PropertyListing />} />
        <Route  path="/About" element={<About />} />
        <Route  path="/ErrorPage" element={<ErrorPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
