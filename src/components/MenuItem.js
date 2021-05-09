import React from 'react'

const MenuItem = ({ item }) => {
    return (
        <div className="Item">
            <h3>{item.strDrink}</h3>
            <img src={item.strDrinkThumb +'/preview'} alt='drink' />
        </div>
    )
}


export default MenuItem