
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Gallery from './Pages/Gallery';
import Table from './Pages/Table';
import Address from './Pages/Address';
import PageNotFound from './Pages/PageNotFound';
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <div >

      <BrowserRouter>
        <Toaster></Toaster>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>

          <Route path='/menu' element={<Menu ></Menu>} ></Route>
          <Route path='/cart' element={<Cart ></Cart>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/Gallery' element={<Gallery></Gallery>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/table' element={<Table></Table>}></Route>

          <Route exact path='/address' element={<Address></Address>}></Route>
          <Route exact path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;

