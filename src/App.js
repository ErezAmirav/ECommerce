import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import Footer from './pages/Footer';
import './App.css';
import { ShoppingContextProvider } from './context/ShoppingContextProvider';

function App() {
  return (
    <>
      <ShoppingContextProvider>
        <Router>
          <Navbar />
          <Box
            sx={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Routes>
              <Route path="/ecommerce" element={<HomePage />} />
              <Route path="/ecommerce/categories" element={<Categories />} />
              <Route path="/ecommerce/contact" element={<Contact />} />
              <Route path="/ecommerce/about" element={<About />} />
              <Route path="/ecommerce/cart" element={<Cart />} />
              <Route path="/ecommerce/*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </ShoppingContextProvider>
    </>
  );
}

export default App;
