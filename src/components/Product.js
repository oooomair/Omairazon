import { useState } from "react"

const Product = ({products, addToCart}) => {

    const [added, setAdded] = useState(false)

    const getCartItem = (product) => {
        addToCart(product)
        setAdded(true)
    }

    return (
        <div className='card'>
            <div className="card-inner">
                <div className="card-front">
                <img src={products.image} alt="" />
                </div>
                <div className="card-back">
                    <h3>{products.title}</h3>
                    <span> {products.description} </span>
                    <strong> price: {products.price}</strong>  
                    <button onClick={() => getCartItem({products})} className='cart-btn btn btn-lg btn-outline-success'>Add to Cart</button>
                    {added && <span className='added'>Added to Cart</span> }
                </div>
            </div>
        </div>
    )
}

export default Product
