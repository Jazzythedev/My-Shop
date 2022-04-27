import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from "./components/Footer.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header.js";
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from './screens/CartScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import RegisterScreen from './screens/RegisterScreen.js'
import ProfileScreen from './screens/ProfileScreen.js'
import ShippingScreen from './screens/ShippingScreen.js'
import PaymentScreen from './screens/PaymentScreen.js'
import PlaceOrderScreen from './screens/PlaceOrderScreen.js'
import OrderScreen from './screens/OrderScreen.js'

const App = () => {
  return (
    <>
        <Router>           
          <Header />
            <main className='py-4'>
            <Container>
              <Routes>                                                          
                <Route path='/' element={ <HomeScreen /> } exact />                 
                <Route path='/product/:id' element={ <ProductScreen /> } />        
                <Route path='/order/:id' element={ <OrderScreen /> } />
                <Route path='/profile' element={<ProfileScreen />} />
                <Route path='/shipping' element={<ShippingScreen />} />
                <Route path='/payment' element={<PaymentScreen />} />
                <Route path='/placeorder' element={<PlaceOrderScreen />} />
                <Route path='/register' element={<RegisterScreen />} />
                <Route path='/cart/:id' element= { <CartScreen /> } />                 
                <Route path='/cart' element= { <CartScreen /> } />                    
                <Route path='/login' element= { <LoginScreen /> } />     
              </Routes>
            </Container>                                                          
            </main>
            <Footer />
        </Router>
    </>
  );
}

export default App;
