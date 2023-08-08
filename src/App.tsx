import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AreaSelector from './pages/AreaSelector';
import WeatherCity from './pages/WeatherCity';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/map' element={<AreaSelector/>}></Route>  
        <Route path='/weather' element={<WeatherCity/>}></Route>
        <Route path='*' element={<Navigate to={'/map'}/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
