
import './App.css';
import Home from './Components/Home';
import GlobalStyle from './Globalstyles';
import {Routes,Route}from 'react-router-dom'
import SingleProduct from './Components/SingleProduct';
import Header from './Components/Header';
import Cart from './Components/Cart';
function App() {
  return (

    <div className="App">
      <GlobalStyle/>
      <Header />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
    </div>
  );
}

export default App;
