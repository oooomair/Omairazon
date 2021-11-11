import React from 'react'

const Filter = ({settingCategory}) => {

    const getCategory = (text) => {
        settingCategory(`category/${text}`)
       }

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Filter Products
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li onClick={(e) => getCategory(e.target.innerText)} className='dropdown-item'>electronics</li>
                <li onClick={(e) => getCategory(e.target.innerText)} className='dropdown-item'>jewelery</li>
                <li onClick={(e) => getCategory(e.target.innerText)} className='dropdown-item'>men's clothing</li>
                <li onClick={(e) => getCategory(e.target.innerText)} className='dropdown-item'>women's clothing</li>
            </ul>
        </div>
    )
}

export default Filter
