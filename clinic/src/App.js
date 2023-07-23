import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import About from './About';
import Service from './pages/Service';
import Login from './pages/Login';
import Register from './pages/Registration';
import Appointment from './pages/Appointment';
import Booking from './pages/Booking';
import Discover from './pages/Discover';

function App() {
  return (
    <div className="App">
  <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
         <Route path='About' element={<About/>}/>
         <Route path='Service' element={<Service/>}/>
         <Route path='Login' element={<Login/>}/>
         <Route path='Register' element={<Register/>}/>
         <Route path='Appointment' element={<Appointment/>}/>
         <Route path='Booking' element={<Booking/>}/>
         <Route path='Discover' element={<Discover/>}/>
        {/* <Route path='Appointment' element={<Appointment/>}/>
        <Route path='Booking' element={<Booking/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>  */}
         
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
