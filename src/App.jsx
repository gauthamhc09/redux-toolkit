import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { addToCart, removeFromCart, productListAdd } from './redux/action';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const data = {
    item: 'iPhone14',
    price: 100000,
    qty: 100
  };

  const { isOpen } = useSelector(state => state.modal);

  return (
    <>
      {/* <Header />
      <button onClick={() => dispatch(addToCart(data))}>Add to Cart</button>
      <button onClick={() => dispatch(removeFromCart(data))}>Remove from Cart</button>
      <button onClick={() => dispatch(productListAdd())}>Product List</button>
      <div>
        {result && result.map(item => {
          return (
            <h1 key={item.id}>{item.title}</h1>
          )
        })}
      </div> */}
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </>

  )
}

export default App
