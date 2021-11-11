import React from 'react'
import CartProduct from './CartProduct'

const CartProducts = ({ addCart, deleteCartItem, deletePrice }) => {
    return (
        <div className='pro-con'>
            {addCart.map(product => {
               return <CartProduct product={product} key={product.id} deleteCartItem={deleteCartItem} deletePrice={deletePrice} />
            })}
        </div>
    )
}

export default CartProducts
