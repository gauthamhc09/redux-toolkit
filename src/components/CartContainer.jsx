import { modelOpen } from '../redux_toolkit/features/cart/modalSlice';
import CartItem from './CartItem'
import { useDispatch, useSelector } from "react-redux";

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, amount, total } = (useSelector((state) => state.cart))
    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }


    return (
        <section className="cart">
            <header>
                <h2>Your bag</h2>
            </header>
            <div>
                {cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>total <span>${total}</span></h4>
                </div>
                {
                    cartItems.length !== 0 && <button className='btn clear-btn' onClick={() => dispatch(modelOpen())}>Clear Cart</button>
                }

            </footer>
        </section>
    )
};

export default CartContainer;
