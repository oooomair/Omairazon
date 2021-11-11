import {AiFillDelete} from 'react-icons/ai'

const CartProduct = ({ product, deleteCartItem, deletePrice }) => {

    const getId = (id, price) => {
        deleteCartItem(id)
        deletePrice(price)
    }

    return (
        <div className='cart-product-container'>
            <div className="cart-product-img-cont">
            <img className='cart-product-img' src={product.image} alt="" />
            </div>
            <div className='cart-product-desc'>
                <h2>{product.title}</h2>
                <h3>Price: {product.price}</h3>
                <AiFillDelete onClick={() => getId(product.id, product.price)} className='delete-logo'/>
            </div>
        </div>
    )
}

export default CartProduct
