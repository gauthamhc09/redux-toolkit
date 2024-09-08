import { useDispatch } from 'react-redux';
import { modelClose } from '../redux_toolkit/features/cart/modalSlice';
import { clearCart } from '../redux_toolkit/features/cart/cartSlice';

const Modal = () => {
    const dispatch = useDispatch();

    function clearCartFn() {
        dispatch(clearCart())
        dispatch(modelClose())
    }
    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>remove all items from your shopping cart?</h4>
                <div className='btn-container'>

                    <button
                        type='button'
                        className='btn confirm-btn'
                        onClick={() => clearCartFn()}>
                        confirm
                    </button>
                    <button
                        type='button'
                        className='btn clear-btn'
                        onClick={() => dispatch(modelClose())}
                    >
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    );
};
export default Modal;