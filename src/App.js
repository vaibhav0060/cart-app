import React from 'react'
import  {BrowserRouter as Router , Routes , Route} from 'react-router-dom' ; 
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import "./App.css"
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className='mainContainer'>
        <Router>
            <Navbar/>
<Routes>
<Route path='/' element = {<Home/>}></Route>
<Route path='/cart' element = {<Cart/>}></Route>


</Routes>


        </Router>





    </div>
    </Provider>
  )
}

export default App