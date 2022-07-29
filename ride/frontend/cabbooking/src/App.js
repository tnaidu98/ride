import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome'
import Driver from './components/Driver/Driver';
import Rider from './components/Rider/Rider';
import { Header } from './components/Header';
import { useState } from 'react';
import RegisterDriver from './components/Driver/RegisterDriver';
import DriverHomePage from './components/Driver/DriverHomePage';

function App() {

  const [user, setUser] = useState();

  return (
    <div className="App">
       <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/" exact element={<Welcome user={user} setUser={setUser} />} />
          <Route path="/rider" exact element={<Rider />} />
          <Route path="/driverLogin" exact element={<Driver />} />
          <Route path="/registerDriver" exact element={<RegisterDriver />} />
          <Route path="/driverHomePage" exact element={<DriverHomePage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
