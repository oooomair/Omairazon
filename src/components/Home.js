import Options from "./Options"
import Products from "./Products"
import Spinner from "./Spinner"

const Home = ({products, settingCategory, isLoading, addToCart}) => {
    return (
        <div className='home'>
            <Options settingCategory={settingCategory}/>
            {isLoading ? <Spinner/> : <Products products={products} addToCart={addToCart} settingCategory={settingCategory} />} 
        </div>
    )
}

export default Home
