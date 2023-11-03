import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './Styles/GlobalStyle'
import Home from './Pages/Home/Home'
import Navbar from './components/Navbar/Navbar';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import NotFound from './Pages/NotFound/NotFound'



const App = () => {
  return (
    <Provider store={store}>
      {/* Global Styling */}
      <GlobalStyle />

      {/* Navbar on top of each page */}
      <Navbar />
      <Router>
        <Routes>

          {/* Product List/Home Page */}
          <Route exact path="/" element={<Home />}></Route>

          {/* Product Details Page */}
          <Route exact
            path="/details/:productId"
            element={<ProductDetails />}
          ></Route>

          {/* 404 Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
