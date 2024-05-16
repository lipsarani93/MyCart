import React from 'react'
import cartItems from './data'
import CartItem from './CartItem';
import { useGlobalContext } from './context';

const CartContainer = () => {

    const {cart, clearCart, totalCost} = useGlobalContext()
    const cartArray = Array.from(cart.entries());

    if(cartArray.length === 0){
        return (
            <section className="cart">
                <header>
                    <h2>Your Bag</h2>
                    <h4 className="empty-cart">
                        is currently empty. Please add products to view.
                    </h4>
                </header>
            </section>
        )
    }
  return (
    <section className="cart">
        <header>
            <h2>Your Bag</h2>
        </header>
        <div>
            {cartArray.map((cartItem) => {
                const [id, item] = cartItem
                return <CartItem key={id} {...item}/>
            }
        )}

        <footer>
            <hr/>
            <div>
                <h5 className="cart-total">
                    Total <span>₹{totalCost.toFixed(2)}</span>
                </h5>
            </div>

            <button className="btn btn-hipster" onClick={clearCart}>
                Clear Cart</button>
        </footer>
        </div>
    </section>
    
  )
}

export default CartContainer
