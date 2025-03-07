import { CartIcon } from "../icons";
import { useSelector } from "react-redux";


const Navbar = () => {

    const { cartItems, amount } = (useSelector((state) => state.cart))
    console.log(cartItems)
    return (
        <nav>
            <div className="nav-center">
                <h3>redux - toolkit</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{amount ?? 0}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;