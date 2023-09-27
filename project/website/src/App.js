import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" index element={<> <Header /> <Home /> <Footer /> </>}></Route>
        <Route path="/signup" element={<> <SignUp /> </>}></Route>
        <Route path="/login" element={<> <Login /> </>}></Route>
        <Route path="/about" element={<> <Header /> <About /> <Footer /> </>}></Route>
        <Route path="/menu" element={<> <Header /> <Menu /> <Footer /> </>}></Route>
        <Route path="/team" element={<> <Header /> <Team /> <Footer /> </>}></Route>
        <Route path="/contact" element={<> <Header /> <Contact /> <Footer /> </>}></Route>
        <Route path="/profile" element={<> <Header /> <Profile /> <Footer /> </>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
