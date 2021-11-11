import { Link } from "react-router-dom"

const Checkout = ({prices, clearCart}) => {

    let total = 0


        return (
            <div className='checkout-cont'>
                <h2>Your total is:</h2>
                {prices.map(price => {
                    total += price
                    if (total===0) {
                        <span className='nothing'>0</span>
                    } else {
                        return <span key={price}>+{price}</span>
                    }})}
               <h3>={total}</h3>
               {total>0 && <Link to='/receipt'>
               <button onClick={() => clearCart()} className="btn btn-lg btn-outline-success">CheckOut</button>
               </Link>}
            </div>
    

        )}

export default Checkout
