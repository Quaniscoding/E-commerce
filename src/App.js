import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCatogery } from './Pages/ShopCatogery';
import { Products } from './Pages/Products';
import { Cart } from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import { Shop } from './Pages/Shop';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCatogery banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCatogery banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCatogery banner={kid_banner} category="kid" />} />
          <Route path='product' element={<Products />}>
            <Route path=':productId' element={<Products />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
