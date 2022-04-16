import React from 'react';
import { Container  } from 'react-bootstrap';
import './components/Navbar/navbar.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./Pages/Home/Home"; 
import About from "./Pages/About/About"; 
import Signup from "./Pages/Signup/Signup"; 
import Cart from './Pages/Cart/Cart';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';

const App = () => {
  return (

    <BrowserRouter>
      <Navbar />

      {/*When clicked on the links of Home, About, Signup
        it loads that particular page*/}
      <Routes>  
        <Route path = '/' element = {<Home/>} exact/>

        <Route path = '/about' element = {<About/>} exact/>

        <Route path = '/signup' element = {<Signup/>} exact />

        <Route path = '/cart' element = {<Cart/>} exact />
      </Routes>
      <main>
        <Container>
          <h1>Artflix</h1>
          <HomeScreen /> 
        </Container>
      </main>
    </BrowserRouter>
  )
}

export default App;