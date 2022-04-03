import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Home from './components/Home/Home/Home'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div className="App">  
       <BrowserRouter>  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/project/:Id' element={<ProjectDetails />} />
          </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
