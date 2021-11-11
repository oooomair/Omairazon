import React from 'react'
import CartProducts from './CartProducts'
import Checkout from './Checkout'

const Cart = ({ addCart, prices, clearCart, deleteCartItem, deletePrice }) => {
    return (
        <div className='cart'>
            <h1>Your Shopping Cart:</h1>
            <div className="cart-container">
                <div className="cart-products">
                    { addCart.length === 0 ? <h2 className='empty-cart' >Your Cart is empty</h2> :<CartProducts addCart={addCart} deleteCartItem={deleteCartItem} deletePrice={deletePrice} /> }
                </div>
                <div className="checkout">
                    <Checkout prices={prices} clearCart={clearCart} />
                </div>
            </div>
        </div>
    )
}

export default Cart
