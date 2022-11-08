import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import { Navbar } from './components/Navbar/index';
import { Home, About, Galeria, Error404, Skills, Education, Experiences, Portfolios, Profile } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className='App'>
    <BrowserRouter>
    
      <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/skill' element={ <Skills/> }/>
          <Route path='/education' element={ <Education/> }/>
          <Route path='/experiences' element={ <Experiences/> }/>
          <Route path='/portfolios' element={ <Portfolios/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/galeria' element={ <Galeria /> } /> 
          <Route path='/profile' element={ <Profile /> } /> 

          <Route path='*' element={ <Error404 /> } /> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App
