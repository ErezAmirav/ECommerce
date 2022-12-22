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
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </ShoppingContextProvider>
    </>
  );
}

export default App;
