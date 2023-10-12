import Footer from "./Component/Footer";
import Header from "./Component/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Product from "./SASS/Product";
import State from "./Pages/State";
import UseContext from "./UseContext/UseContext";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<><Header /><Home /><Footer /></>}></Route>
        <Route path='/about' element={<><Header /><About /> <Footer /></>}></Route>
        <Route path='/contact' element={<><Header /><Contact /><Footer /></>}></Route>
        <Route path='/product' element={<><Header /><Product /><Footer /></>}></Route>
        <Route path='/state' element={<><Header /><State /><Footer /></>}></Route>
        <Route path='/context' element={<><Header /><UseContext /><Footer /></>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;