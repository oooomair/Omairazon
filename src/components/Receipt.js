import { useState } from "react"

const Receipt = () => {

    const [clicked, setClicked] = useState(false)

    return (
        <div className='receipt'>
            <h1>Thank you for shopping at Omairazon</h1>
            <h2>Hope you have a wonderful Day ❤ </h2> 
            <span>Click button to download your recipt</span>
            <button onClick={() => setClicked(true)} className='btn btn-lg btn-outline-info'>Receipt</button>
            {clicked && <span className='lol'>lol nothing happens</span>}
        </div>
    )
}

export default Receipt
