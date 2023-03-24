import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import {Route,Routes,Link} from 'react-router-dom';
import About from './Pages/About/About';
import Reviews from './Pages/Reviews/Reviews';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path='about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
