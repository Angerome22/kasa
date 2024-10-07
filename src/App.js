import './styles/index.scss';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import PropertyListing from './pages/PropertyListing/PropertyListing';
import About from './pages/About/About';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Layout from './components/Layout/layout';


function App() {
  return (
    <div className="App">    
      
      <Routes>
        <Route element={<Layout />} />
          <Route  path="/" element={<Home />} />
          <Route  path="/PropertyListing/:id" element={<PropertyListing />} />
          <Route  path="/About" element={<About />} />
          <Route  path="*" element={<ErrorPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
