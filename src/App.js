import { useSelector } from 'react-redux';
import './App.css';
import Cart from './Cart/Cart';
import Header from './Header/Header';
import Product from './Product/Product';

function App() {
 const showCart=  useSelector(state => state.ui.cartVisible);

  return (
    <div className="App">
    <Header />
    {showCart && <Cart />}
     <Product />
    </div>
  );
}

export default App;
