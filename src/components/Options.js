const Options = ({settingCategory}) => {

    

    const getCategory = (text) => {
     settingCategory(`category/${text}`)
    }

    return (
        <div className='options'>
            <h3>Categories</h3>
            <ul>
                <li onClick={(e) => getCategory(e.target.innerText)} className='category'>electronics</li>
                <li onClick={(e) => getCategory(e.target.innerText)} className='category'>jewelery</li>
                <li onClick={(e) => getCategory(e.target.innerText)} className='category'>men's clothing</li>
                <li onClick={(e) => getCategory(e.target.innerText)} className='category'>women's clothing</li>
            </ul>
        </div>
    )
}

export default Options
