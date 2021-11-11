import Filter from "./Filter"
import Product from "./Product"

const Products = ({products, addToCart, settingCategory}) => {
    return (
        <div className='bruh'>
        <Filter settingCategory={settingCategory} />
        <div className='cards'>
            {products.map(product => {
                return <Product key={product.id} products={product} addToCart={addToCart} />
            })}
            
        </div>
        </div>
    )
}

export default Products
