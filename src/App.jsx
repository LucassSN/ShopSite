import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    
    </BrowserRouter>
    
  
  )
}

export default App
