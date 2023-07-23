
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Service from './pages/Service';
import Appointment from './pages/Appointment';
import Booking from './pages/Booking';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Service' element={<Service/>}/>
        <Route path='Appointment' element={<Appointment/>}/>
        <Route path='Booking' element={<Booking/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
